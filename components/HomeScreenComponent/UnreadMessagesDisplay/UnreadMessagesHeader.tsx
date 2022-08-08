import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { screenHeight } from "../../../constants/screenSize";
import { EvilIcons } from '@expo/vector-icons';

export default function UnreadMessagesHeader() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginTop: screenHeight / 75.9,
        alignItems: "center",
      }}
    >
      <Text style={{ color: "grey", fontWeight: "500", fontSize: 18 }}>
        Unread Messages
      </Text>
      <TouchableOpacity activeOpacity={0.8}>
      <EvilIcons name="close" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
