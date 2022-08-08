import { View, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import TaskComponentStyle from "./TaskComponentStyle";

export default function TaskHeaderComponent() {
  return (
    <View style={TaskComponentStyle.headerContainer}>
      <Text style={TaskComponentStyle.yourTask}>Your Task</Text>
      <View style={TaskComponentStyle.selectDateContainer}>
        <Text style={TaskComponentStyle.text}>Today, </Text>
        <Text style={TaskComponentStyle.text}>30 July</Text>
        <MaterialIcons name="arrow-drop-down" size={24} color="black" />
      </View>
    </View>
  );
}
