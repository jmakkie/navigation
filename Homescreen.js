
import { AntDesgin } from '@expo/vector-icons';
import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function HomeScreen({navigation}) {
    const [message, setMessage] = useState('Testing')
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerStyle: {
          backgroundColor: '#f0f0f0'
        },
        headerRight: () => (
          <AntDesgin
            style={styles.navButton}
            name="arrowright"
            size={24}
            onPress={()=>navigation.navigate('Second',{message: message})}
          />
        )
      })
  },[message])
  
    return(
      <View style={styles.container}>
        <Text>Home Screen: {message}</Text>
         <TextInput onChangeText={text => setMessage(text)} value={message} placeholder='type message'></TextInput>
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