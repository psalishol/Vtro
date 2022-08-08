import { View, Text, Image, FlatList } from "react-native";
import React, { FunctionComponent } from "react";
import UnreadMessagesHeader from "./UnreadMessagesHeader";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { colors } from "../../../constants/appColors";


interface UnreadMessagesProps {
    isFile: Boolean;
    senderPicture?: String | undefined;
    senderName?: String;
    fileName?: String;
    fileType?: any;
    timeSent?: String;
    teamName?: String;
    fileSize?: String;
    message?: String;
    senderId?: String;
    chatId?: String;
  }
  

export default function UnreadMessagesComponent() {
  return (
    <View style ={{backgroundColor: colors.backgroundColor, padding: 10}}>
      <UnreadMessagesHeader />
      <FlatList horizontal showsHorizontalScrollIndicator ={false} data = {[{message: 1}, {message: 2}, {message: 3}, {message: 4}]} renderItem ={({item}) => <UnreadMessages key={item.message} isFile={false} />} />
    </View>
  );
}

export const UnreadMessagesContainer = () => <View></View>;


export const UnreadMessages: FunctionComponent<UnreadMessagesProps> = ({
  isFile,
  fileType,
  senderPicture,
  senderName,
  timeSent,
  teamName,
  fileName,
  fileSize,
  message,
}) => (
  <View
    style={{
      height: 140,
      width: 280,
      backgroundColor: colors.white,
      padding: 15,
      borderRadius: 10,
      marginTop: 10,
      marginRight:  10
    }}
  >
    {isFile ? <IsFileView /> : <IsTextView />}
    <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}>
      <Image
        style={{ height: 50, width: 50, borderRadius: 40 }}
        source={{ uri: DUMMY_IMAGE_LINK }}
      />
      <View style={{ marginLeft: 10 }}>
        <Text style={{ color: "#11097d", fontSize: 18, fontWeight: "bold" }}>
          Peter Parker
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              marginRight: 5,
              fontSize: 14,
              color: "grey",
              fontWeight: "400",
            }}
          >
            2h ago
          </Text>
          <Text style={{ fontSize: 14, color: "grey", fontWeight: "500" }}>
            UI team
          </Text>
        </View>
      </View>
    </View>
  </View>
);

const DUMMY_TEXT =
  " This is the beginiing of the good thing in out life and those that know usor we know";
const DUMMY_IMAGE_LINK =
  "https://img.freepik.com/free-photo/close-up-smiley-man-taking-selfie_23-2149155156.jpg?w=2000";
const IsTextView = () => (
  <View
    style={{
      backgroundColor: colors.transluscentBlue,
      padding: 10,
      //   margin: 20,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      borderBottomRightRadius: 10,
    }}
  >
    <Text style={{ fontSize: 14, fontWeight: "500", color: "#11097d" }}>
      {DUMMY_TEXT.substring(0, 68).trim() + "..."}
    </Text>
  </View>
);

const IsFileView = () => (
  <View style={{ flexDirection: "row" }}>
    <View>
      <AntDesign name="file1" size={24} color="black" />
    </View>
    <View>
      <Text>Wireframe.fig</Text>
      <Text>23 mb</Text>
    </View>
  </View>
);
