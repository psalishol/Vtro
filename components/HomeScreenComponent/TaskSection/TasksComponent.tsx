


import { View, Text } from 'react-native'
import React from 'react'
import TaskHeaderComponent from './TaskHeaderComponent'
import TaskItems from './TaskItems'
import { colors } from '../../../constants/appColors'

export default function TasksComponent() {
  return (
    <View >
        <TaskHeaderComponent />
        <TaskItems taskTitle={'Mobile App Development'} workSpaceTitle ={"Jimmy's Project"} />
        <TaskItems taskTitle={'Design App Management'} workSpaceTitle ={"Jimmy's Project"} />
        <TaskItems taskTitle={'Mobile App Development'} workSpaceTitle ={"Jimmy's Project"} />
       
    </View>
  )
}