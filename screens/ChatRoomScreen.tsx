import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
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

  // console.log(chatRoomMessages);

  const route = useRoute();

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
        setChatRoomMessages((existingChatroomMessages) => [
          msg.element,
          ...existingChatroomMessages,
        ]);
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
      <CustomStatusBar barStyle="dark-content" backgroundColor={"#3872E9"} />
      <SafeAreaView style={styles.page}>
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
        <ChatTextInput chatRoomId={chatRoomID} />
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
