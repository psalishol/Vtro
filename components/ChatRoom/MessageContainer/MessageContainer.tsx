import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { MessageStyles } from "./MessageStyle";
import { Message } from "../../../src/models";

export default function Messages({
  message,
  recipientID,
}: {
  message: Message;
  recipientID: string;
}) {
  const myMessage = message.userID !== recipientID;
  return (
    <View
      style={
        myMessage
          ? message.message.length < 50
            ? MessageStyles.myMessageSmallTextContainer
            : MessageStyles.myMessageContainer
          : message.message.length < 50
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
        {message.message}
      </Text>
    </View>
  );
}
