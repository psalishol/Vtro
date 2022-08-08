

import { View, Text } from 'react-native'
import React from 'react'
import { Feather, MaterialIcons } from '@expo/vector-icons'

export default function InboxHeaderComponent() {
  return (
    <View style ={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 15,}}>
     <Text style = {{fontSize: 30, fontWeight: 'bold', }}>Inbox</Text>
     <Feather  name="video" size={24} color="black" />
    </View>
  )
}