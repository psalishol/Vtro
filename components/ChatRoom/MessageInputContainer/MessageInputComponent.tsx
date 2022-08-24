import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { SimpleLineIcons, Feather, Ionicons, Entypo } from "@expo/vector-icons";
import { Auth, DataStore } from "aws-amplify";
import { Message } from "../../../src/models";
import EmojiSelector from "react-native-emoji-selector";
import * as ImagePicker from "expo-image-picker";

export default function ChatTextInput({ chatRoomId }: { chatRoomId: string }) {
  const [message, setMessage] = useState("");
  const [isEmojiInputOpened, setIsEmojiInputOpened] = useState<boolean>(false);
  const [pickedImage, setPickedImage] = useState<String>();

  console.log(message);

  const onSendMessage = async (message: string) => {
    const authUser = await Auth.currentAuthenticatedUser();
    await DataStore.save(
      new Message({
        message,
        userID: authUser.attributes.sub,
        chatroomID: chatRoomId,
      })
    )
      .finally(() => setMessage(""))
      .catch((error) => console.log("Error in sending message", error));
  };

  const pickImage = async () => {
    const pickedImage = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 4],
      quality: 1,
    });

    if (!pickedImage.cancelled) {
      setPickedImage(pickedImage.uri);
    }
  };
  const onPlusClicked = () => {
    console.warn("plus button clicked");
  };
  const onPressed = () => {
    if (message) {
      onSendMessage(message);
    } else {
      onPlusClicked();
    }
  };
  return (
    <View style={styles.inputContainer}>
      <View style={styles.textInputContainer}>
        <TouchableOpacity
          onPress={() => setIsEmojiInputOpened(!isEmojiInputOpened)}
        >
          <SimpleLineIcons name="emotsmile" size={24} color="darkgrey" />
        </TouchableOpacity>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Message"
          style={styles.input}
        />
        <TouchableOpacity onPress={pickImage}>
          <Feather
            name="camera"
            size={24}
            color="darkgrey"
            style={styles.icons}
          />
        </TouchableOpacity>
        <Feather name="mic" size={24} color="darkgrey" />
      </View>
      <Pressable onPress={onPressed} style={styles.sendButton}>
        {message ? (
          <Ionicons name="ios-send" size={18} color="white" />
        ) : (
          <Entypo name="plus" size={24} color="white" />
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
    backgroundColor: "#f0f0f0",
    borderRadius: 30,
    justifyContent: "center",
    padding: 5,
    marginRight: 5,
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    zIndex: 6,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
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
