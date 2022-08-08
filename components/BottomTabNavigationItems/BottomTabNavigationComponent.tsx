import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "../../screens/HomeScreen";
import ProjectScreen from "../../screens/ProjectScreen";
import MessagesScreen from "../../screens/MessagesScreen";
import ProfileScreen from "../../screens/ProfileScreen";

const NAVIGATION_ITEMS = [
  { id: 1, navigationIcon: "home", navigationName: "Home" },
  { id: 2, navigationIcon: "list-alt", navigationName: "Projects" },
  { id: 3, navigationIcon: "message", navigationName: "Messages" },
  { id: 4, navigationIcon: "person", navigationName: "Settings" },
];

const NAVIGATION_SCREENS = {
    'HOME': HomeScreen,
    'PROJECT': ProjectScreen,
    'MESSAGES': MessagesScreen,
    'PROFILE': ProfileScreen  
}

export default function BottomTabNavigationComponent() {
    const [activeScreen, setActiveScreen] = useState('HOME');
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
      }}
    >
      {NAVIGATION_ITEMS.map((navigationItem, index) => (
        <TouchableOpacity
          style={{ alignItems: "center" }}
          key={navigationItem.id}
        >
          <MaterialIcons
            name = {navigationItem.navigationIcon}
            size={24}
            color="black"
          />
          <Text>{navigationItem.navigationName}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
