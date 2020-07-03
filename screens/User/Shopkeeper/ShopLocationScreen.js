import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as firebase from 'firebase'
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { globalStyles } from '../../../styles/global';

export default class ShopLocationScreen extends Component {

    state = {
        location: null,
        newLoc: null,
        errMsg: null,
        showUpload:false
    }

    getTheLocationAtFirst = async () => {
        console.log('location at first')
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            this.props.setState({errMsg: 'Permission to access location was denied'})
        }    
        var location = await Location.getCurrentPositionAsync({})
        this.setState({location: location.coords, newLoc: location.coords})
    }

    constructor(props) {
        super(props)
        this.getTheLocationAtFirst()
        .then(console.log('Constructor'))        
    }

    uploadTheDeatils = async () => {
        await firebase
            .database()
            .ref('/shop/' + firebase.auth().currentUser.uid)
            .update({
                location_of_shop: this.state.location,
                isOpen: 1,
                qSize: 10,
                time: 5,
                line: {}
            })
            .then(() => {                
                Alert.alert('Information','User Data is Uploaded')
                this.props.navigation.navigate("Shop")
            });
    }

    getTheLocation = () => {
        console.log('hello')
        var loc = this.state.newLoc
        this.setState({
            location: loc,
            showUpload:true
        })
    }

    onRegionChange = (region) => {
        this.setState({
            newLoc: region
        })
    }
    
    render() {
        return (
            <View style={globalStyles.body}>
                <Text style={styles.Header}>Location Of The Shop </Text>    
                   { this.state.location && <MapView 
                        style={styles.mapStyle} 
                        initialRegion={{
                            latitudeDelta: 1.3,
                            longitudeDelta: 1.0,
                            longitude: this.state.location.longitude,
                            latitude: this.state.location.latitude
                        }}
                        onRegionChange={this.onRegionChange}
                        zoomControlEnabled
                    >
                         { this.state.newLoc && <Marker
                            pinColor='blue'
                            coordinate={this.state.newLoc}
                            title="You Want this place to select"
                        /> }

                        <Marker
                            coordinate={this.state.location}
                            title="You are Here"
                        />

                    </MapView> }

                    <TouchableOpacity style={styles.myBtnB} onPress={this.getTheLocation}>
                        <Text style={styles.label}>Click To Select Location </Text>
                    </TouchableOpacity>

                    {this.state.showUpload?
                    <TouchableOpacity 
                        style={styles.myBtnB}
                        onPress = {() => {
                            this.uploadTheDeatils()
                        }}
                    >
                        <Text style={styles.label}>Upload </Text>
                    </TouchableOpacity>
                    :null
                    }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
      paddingTop: 80,
      paddingLeft: 15,
    },
    label: {
        fontSize: 15,
        color: '#555',
        margin: 5,
        padding: 10,
        fontFamily:'nunito-bold'
    },
    myInput: {
        fontSize: 13,
        borderBottomColor: '#666',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderRadius: 15,
        padding: 15,
        margin: 5,
    },

    myBtnA: {
        padding: 10,
        margin: 7,
        borderRadius: 17,
        borderWidth: 2,
        borderColor: '#aaa',
        alignItems: 'center',
    },

    myBtnB: {
        padding: 5,
        margin: 3,
        borderRadius: 30,
        borderColor: '#aaa',
        alignItems: 'center',
        backgroundColor: '#fedbd0',
        marginTop: 30,
    },

    Header: {
        fontSize: 28,
        alignSelf: 'center',
        padding: 10,
        paddingBottom: 20,
        fontFamily:'nunito-bold',
        color:'#fff'
    },

    mapStyle: {
        margin:10,
        width: Dimensions.get('window').width-60,
        height: 400,
        elevation:12
      },

})
