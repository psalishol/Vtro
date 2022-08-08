import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ProjectScreen from "../screens/ProjectScreen";
import InboxScreen from "../screens/InboxScreen";
import ProfileScreen from "../screens/ProfileScreen";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const BottomTabNavigator = createBottomTabNavigator();

const NAVIGATION_ITEMS = [
  { id: 1, navigationIcon: "home", navigationName: "Home" },
  { id: 2, navigationIcon: "list-alt", navigationName: "Projects" },
  { id: 3, navigationIcon: "message", navigationName: "Messages" },
  { id: 4, navigationIcon: "person", navigationName: "Settings" },
];

const ROUTE_ICONS = {
  Home: "home",
  Project: "list-alt",
  Message: "message",
  Setting: "person",
};

export const BottomTabNavigation = () => (
  <BottomTabNavigator.Navigator
    screenOptions={({ route }) => ({
      tabBarHideOnKeyboard: true,
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        return (
          <MaterialIcons
            name={ROUTE_ICONS[route.name]}
            size={size}
            color={color}
          />
        );
      },
      tabBarLabelStyle: { fontSize: 14, fontWeight: "600" },
      tabBarActiveTintColor: "lightblue",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <BottomTabNavigator.Screen name="Home" component={HomeScreen} />
    <BottomTabNavigator.Screen name="Project" component={ProjectScreen} />
    <BottomTabNavigator.Screen name="Message" component={InboxScreen} />
    <BottomTabNavigator.Screen name="Setting" component={ProfileScreen} />
  </BottomTabNavigator.Navigator>
);
