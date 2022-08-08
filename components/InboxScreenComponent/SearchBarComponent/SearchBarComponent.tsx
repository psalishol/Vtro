import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

export default function SearchBarComponent() {
  return (
    <View style ={{backgroundColor: '#fafafa', padding: 10, marginHorizontal: 10, borderRadius: 10, flexDirection:'row', alignItems: 'center'}}>
    <Feather name="search" size={20} color="lightgrey" />
      <TextInput style ={{fontSize: 16, marginLeft: 10 }} selectionColor = {'grey'} placeholder='Search Messages' />
    </View>
  )
}