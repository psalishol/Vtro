


import { View, Text } from 'react-native'
import React from 'react'

export default function NewMeetingAlert() {
  return (
    <View style  ={{backgroundColor: '#FEF3E2', padding: 15, margin: 20, borderRadius: 10}}>
      <Text style ={{fontWeight: 'bold', fontSize: 16}}>New Meet!</Text>
      <Text style  ={{fontWeight: '500', fontSize: 14, color: 'grey', marginTop: 5}}>UI Design - Finalise checkout flow and add card for client </Text>
      <View>
        <Text style ={{marginTop: 10, fontSize: 14, fontWeight: 'bold', }}>4:15 - 5:00 PM</Text>
        
      </View>
    </View>
  )
}