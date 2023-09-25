import { BackHandler, StyleSheet, Text, View } from 'react-native';
import { AntDesgin } from '@expo/vector-icons';
import { useLayoutEffect } from 'react';
import React, { useState } from 'react';

export default function SecondScreen({route, navigation}) {
    useEffect(()=> {
      if (route.params?.message) {
        alert(route.params.message);
      }
      BackHandler.addEventListener('hardwareBackPres,close')
        return() => {
            BackHandler.removeEventListener('hardwareBackPress',close)
        }
    }, [])

    function close() {
        navigation.goBack(null)
        return true
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#f0f0f0'
            },
        })
    }, [])

    return(
      <View styles={StyleSheetList.container}>
        <Text>Second Screen</Text>
      </View>
    )
  }

  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});