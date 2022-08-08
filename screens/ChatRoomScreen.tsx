import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ChatTextInput from "../components/ChatRoom/MessageInputContainer/MessageInputComponent";
import Messages from "../components/ChatRoom/MessageContainer/MessageContainer";
import chats from "../DummyData/Chats";
import CustomStatusBar from "../components/GlobalComponents/CustomStatusBar/CustomStatusBar";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ChatRoomScreen() {
  return (
    <>
      <CustomStatusBar barStyle="dark-content" backgroundColor={"#3872E9"} />
      {/* */}
      <SafeAreaView style={styles.page}>
        <ChatRoomHeader />
        <View style={{ flex: 1 }} />
        <FlatList
          style={{}}
          data={chats.messages}
          renderItem={({ item }) => <Messages chat={item} />}
          ListFooterComponent={() => <View style={{ height: 20 }}></View>}
        />
        <ChatTextInput />
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

export const ChatRoomHeader = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#3872E9",
        padding: 10,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
      <Image
        style={{ height: 40, width: 40, borderRadius: 40, marginLeft: 10 }}
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
        }}
      />

      <Text
        style={{
          fontSize: 16,
          color: "white",
          fontWeight: "bold",
          marginLeft: 10,
          flex: 1,
        }}
      >
        Psalishol Samuel
      </Text>

      <TouchableOpacity>
        <Entypo name="dots-three-vertical" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};
