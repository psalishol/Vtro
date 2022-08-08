import { SafeAreaView, FlatList } from "react-native";
import React from "react";
import InboxHeaderComponent from "../components/InboxScreenComponent/InboxHeaderComponent/InboxHeaderComponent";
import SearchBarComponent from "../components/InboxScreenComponent/SearchBarComponent/SearchBarComponent";
import CustomStatusBar from "../components/GlobalComponents/CustomStatusBar/CustomStatusBar";
import { colors } from "../constants/appColors";
import { chatRoom } from "../DummyData/ChatRooms";
import ArchivedChats from "../components/InboxScreenComponent/ArchivedChatContainer/ArchivedChatContainer";
import ChatItem from "../components/InboxScreenComponent/ChatItem/ChatItem";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


type RootStackParamList = {
  ChatRoomScreen: undefined;
  
};

type Props = NativeStackScreenProps<RootStackParamList, 'ChatRoomScreen', 'MyStack'>;

export default function InboxScreen({navigation}: Props) {
  return (
    <>
      <CustomStatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <InboxHeaderComponent />
        <SearchBarComponent />
        <ArchivedChats />
        <FlatList
          data={chatRoom}
          renderItem={({ item }) => (
            <ChatItem
             key={item.id}
              navigation = {navigation}
              profileImageUri={item.users[1].imageUri}
              userName={item.users[1].name}
              lastMessage={item.lastMessage.content}
              messageCount={item.newMessageCount}
            />
          )}
        />
      </SafeAreaView>
    </>
  );
}
