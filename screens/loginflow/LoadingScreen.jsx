import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class LoadingScreen extends Component {
    render() {
        return (
            <View>
                <Text> Loading </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
