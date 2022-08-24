import { useNavigation } from "@react-navigation/native";
import { Auth, DataStore } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { Message } from "../../../src/models";
import { ChatRoom, ChatRoomUser } from "../../../src/models";
import { User } from "../../../src/models";
import ChatItemStyle from "./ChatItemStyle";

const ChatItem = ({ chatRoomDetail }: { chatRoomDetail: ChatRoom }) => {
  const navigation = useNavigation();
  const [users, setUsers] = useState<User[]>();
  const [chatRoomRecipient, setChatRoomRecipient] = useState<User | null>(null);
  const [chatroomLastMessage, setChatroomLastMessage] = useState<
    Message | undefined
  >();

  // console.log("chatroom last message", chatroomLastMessage);

  const textDuration = new Date(chatroomLastMessage?.updatedAt)
    .getHours()
    .toString();

  // console.log('duration', duration)
  useEffect(() => {
    const fetchChatRoomUsers = async () => {
      const authUser = await Auth.currentAuthenticatedUser();
      const chatRoomUsers = (await DataStore.query(ChatRoomUser))
        .filter(
          (chatRoomUsers) => chatRoomUsers.chatRoom.id === chatRoomDetail.id
        )
        .map((chatRoomUsers) => chatRoomUsers.user);
      setUsers(chatRoomUsers);
      const chatRoomMessageReceiver = chatRoomUsers.filter(
        (chatroomUsers) => chatroomUsers.id !== authUser.attributes.sub
      );
      // console.log("ChatRoom recipients", chatRoomMessageReceiver[0]);
      setChatRoomRecipient(chatRoomMessageReceiver[0]);
    };
    fetchChatRoomUsers().then(() => {
      console.log(chatRoomRecipient);
    });
  }, []);
  useEffect(() => {
    const getChatRoomLastMessage = async () => {
      const chatRoomMessages = (await DataStore.query(Message))
        .filter((messages) => messages.chatroomID === chatRoomDetail.id)
        .sort((a, b) => {
          const firstMessageCreation = new Date(a.updatedAt).getTime();
          const secondMessageCreation = new Date(b.updatedAt).getTime();
          if (firstMessageCreation > secondMessageCreation) return 1;
          if (firstMessageCreation < secondMessageCreation) return -1;
          return 0;
        });
      const lastMessage = chatRoomMessages[chatRoomMessages.length - 1];
      setChatroomLastMessage(lastMessage);
    };
    getChatRoomLastMessage();
  }, []);

  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate<any>("ChatRoomScreen", {
            id: chatRoomDetail.id,
            userId: chatRoomRecipient?.id,
          })
        }
        style={ChatItemStyle.container}
      >
        <Image
          style={ChatItemStyle.image}
          source={{
            uri: chatRoomRecipient?.profileImageUri,
          }}
        />
        <View style={ChatItemStyle.secondRowContainer}>
          <View style={ChatItemStyle.firstRowContainer}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {chatRoomRecipient?.fullName}
            </Text>
            <Text>{textDuration + " hours ago"}</Text>
          </View>
          <View style={ChatItemStyle.lastMessage}>
            <Text style={{ width: "80%" }}>
              {chatroomLastMessage
                ? chatroomLastMessage?.message?.length! > 32
                  ? chatroomLastMessage.message?.substring(0, 32).trim() + "..."
                  : chatroomLastMessage?.message
                : ""}
            </Text>
            {chatRoomDetail.newMessages ? (
              <View style={ChatItemStyle.messageCounterContainer}>
                <Text style={ChatItemStyle.messageCounterText}>
                  {chatRoomDetail.newMessages}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ChatItem;
