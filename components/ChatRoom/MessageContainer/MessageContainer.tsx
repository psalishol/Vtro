import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MessageStyles } from "./MessageStyle";

export default function Messages(props) {
  const myMessage = props.chat.user.name === "Vadim";
  return (
    <View
      style={
        myMessage
          ? props.chat.content.length < 50
            ? MessageStyles.myMessageSmallTextContainer
            : MessageStyles.myMessageContainer
          : props.chat.content.length < 50
          ? MessageStyles.receiverSmallTextContainer
          : MessageStyles.receiverMessageContainer
      }
    >
      <Text
        style={
          myMessage
            ? MessageStyles.myMessageText
            : MessageStyles.receiverMessageText
        }
      >
        {props.chat.content}
      </Text>
    </View>
  );
}
