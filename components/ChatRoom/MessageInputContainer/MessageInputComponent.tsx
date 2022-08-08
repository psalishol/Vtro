

import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { SimpleLineIcons, Feather, Ionicons } from "@expo/vector-icons";

export default function ChatTextInput() {
  const [message, setMessage] = useState("");

  const onSendMessagedClicked = () => {
    console.warn("Message sent: ", message);
    setMessage("");
  };
  const onPlusClicked = () => {
    console.warn("plus button clicked");
  };
  const onPressed = () => {
    if (message) {
      onSendMessagedClicked();
    } else {
      onPlusClicked();
    }
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.textInputContainer}>
        <SimpleLineIcons name="emotsmile" size={24} color="darkgrey" />
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Message"
          style={styles.input}
        />
        <Feather
          name="camera"
          size={24}
          color="darkgrey"
          style={styles.icons}
        />
        <Feather name="mic" size={24} color="darkgrey" />
      </View>
      <Pressable onPress={onPressed} style={styles.sendButton}>
        {message ? (
          <Ionicons name="ios-send" size={20} color="white" />
        ) : (
          <Text style={styles.buttonText}>+</Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  icons: {
    marginHorizontal: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 29,
    color: "white",
  },
  textInputContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "lightgrey",
    borderRadius: 30,
    justifyContent: "center",
    padding: 5,
    marginRight: 5,
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButton: {
    width: 40,
    height: 40,
    backgroundColor: "#3872E9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginRight: 10,
  },
});
