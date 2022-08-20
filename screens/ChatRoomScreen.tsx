import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import EmojiSelector from "react-native-emoji-selector";
import ChatTextInput from "../components/ChatRoom/MessageInputContainer/MessageInputComponent";
import Messages from "../components/ChatRoom/MessageContainer/MessageContainer";
import chats from "../DummyData/Chats";
import CustomStatusBar from "../components/GlobalComponents/CustomStatusBar/CustomStatusBar";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Message } from "../src/models";
import { Auth, DataStore, Storage } from "aws-amplify";
import { User } from "../src/models";
// import { S3Image } from "aws-amplify-react-native";
import { colors } from "../constants/Colors";
import { ChatRoomHeader } from "../components/ChatRoom/HeaderComponent/ChatRoomHeader";
export default function ChatRoomScreen() {
  const [chatRoomMessages, setChatRoomMessages] = useState<Message[]>([]);
  const [user, setUser] = useState<User>();
  const [isEmojiInputOpened, setIsEmojiInputOpened] = useState<boolean>(false);
  const [message, setMessage] = useState("");

  const route = useRoute();

  // console.log("Chat room messages ", chatRoomMessages);

  isEmojiInputOpened ? Keyboard.dismiss() : null;

  const chatRoomID = route?.params?.id;
  const userId = route?.params?.userId;
  const recipientName = route.params?.name;
  const recipientProfileImageUri = route.params?.profileImageUri;

  useEffect(() => {
    const fetchMessages = async () => {
      const messages = (
        await DataStore.query(Message, (messages) =>
          messages.chatroomID("eq", chatRoomID)
        )
      ).sort((a: Message, b: Message) => {
        const firstMessageCreation = new Date(a.updatedAt).getTime();
        const secondMessageCreation = new Date(b.updatedAt).getTime();
        if (firstMessageCreation < secondMessageCreation) return 1;
        if (firstMessageCreation > secondMessageCreation) return -1;
        return 0;
      });
      setChatRoomMessages(messages);
    };
    fetchMessages();
  }, []);

  useEffect(() => {
    const subscription = DataStore.observe(Message).subscribe((msg) => {
      if (msg.model === Message && msg.opType === "INSERT") {
        console.log(msg.model, msg.opType, msg.element);
        setChatRoomMessages((existingChatroomMessages) => {
          const index = existingChatroomMessages.findIndex(
            (messages) => messages.id === msg.element.id
          );
          existingChatroomMessages[index] = msg.element;
          return existingChatroomMessages;
        });
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  if (!chatRoomMessages && !user) {
    console.log("Messages loading or no message in this chatroom.");
    return;
  }
  return (
    <>
      <CustomStatusBar barStyle="dark-content" backgroundColor={colors.blue} />
      <SafeAreaView style={styles.page}>
        {/* <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> */}
        <ChatRoomHeader
          profileImageUri={recipientProfileImageUri}
          name={recipientName}
        />
        <FlatList
          inverted
          data={chatRoomMessages}
          renderItem={({ item }) => (
            <Messages recipientID={userId} message={item} />
          )}
          ListFooterComponent={() => <View style={{ height: 20 }}></View>}
        />
        <KeyboardAvoidingView
          keyboardVerticalOffset={50}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ChatTextInput
            setChatRoomMessages={setChatRoomMessages}
            chatRoomMessages={chatRoomMessages}
            message={message}
            setMessage={setMessage}
            isEmojiInputOpened={isEmojiInputOpened}
            setIsEmojiInputOpened={setIsEmojiInputOpened}
            chatRoomId={chatRoomID}
          />
        </KeyboardAvoidingView>
        {isEmojiInputOpened ? (
          <View style={{ height: "37%" }}>
            <EmojiSelector
              columns={10}
              onEmojiSelected={(emoji) => setMessage(message + emoji)}
            />
          </View>
        ) : null}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
