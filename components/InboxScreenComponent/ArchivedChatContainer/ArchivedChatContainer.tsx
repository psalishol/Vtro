import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import ArchivedContainerStyle from "./ArchivedContainerStyle";

const ArchivedChats = () => (
  <TouchableOpacity
    activeOpacity={0.7}
    style={ArchivedContainerStyle.container}
  >
    <Text style={ArchivedContainerStyle.text}>Archived Chats</Text>
  </TouchableOpacity>
);

export default ArchivedChats;
