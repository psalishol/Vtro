import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react';
import { Auth } from 'aws-amplify';

export default function ProfileScreen() {

  const onPressed = () => {
    Auth.signOut()
  }
  return (
    <SafeAreaView style ={{flex: 1, backgroundColor: 'white'}}>
     <TouchableOpacity onPress={onPressed} style = {{marginTop: 40, marginRight: 30, padding: 20, backgroundColor: 'red'}} >
        <Text style ={{color: 'white'}}>Log out</Text>
     </TouchableOpacity>
    </SafeAreaView>
  )
}