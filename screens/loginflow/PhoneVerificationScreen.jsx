import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class PhoneVerificationScreen extends Component {
    render() {
        return (
            <View>
                <Text> Phone </Text>
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
