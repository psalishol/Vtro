import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import WorkSpaceStyle from "./WorkSpaceComponentStyle";
const WorkSpaceHeader = () => (
  <View style={WorkSpaceStyle.headerContainer}>
    <Text style={WorkSpaceStyle.text}>Your workspace</Text>
    <TouchableOpacity activeOpacity={0.8}>
      <Text style={WorkSpaceStyle.viewAllStyle}>View all</Text>
    </TouchableOpacity>
  </View>
);

export default WorkSpaceHeader;
