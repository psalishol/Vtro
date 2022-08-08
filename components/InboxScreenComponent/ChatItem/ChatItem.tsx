import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FC, FunctionComponent } from "react";
import { ImageSourcePropType } from "react-native";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import ChatItemStyle from "./ChatItemStyle";



interface ChatItemProps {
  profileImageUri: String;
  userName: String;
  timeStamp?: String;
  lastMessage: String;
  messageCount: Number | undefined;
  imageUri: ImageSourcePropType | any;
  navigation: any;

}




const ChatItem: FC<ChatItemProps> = ({
  navigation,
  profileImageUri,
  userName,
  timeStamp,
  lastMessage,
  messageCount,
  imageUri
}) => {

  imageUri = {
    uri: profileImageUri
  }
  // const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('ChatRoomScreen')} style={ChatItemStyle.container}>
        <Image style={ChatItemStyle.image} source= {imageUri} />

        <View style={ChatItemStyle.secondRowContainer}>
          <View style={ChatItemStyle.firstRowContainer}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{userName}</Text>
            <Text>4 hours ago</Text>
          </View>
          <View style={ChatItemStyle.lastMessage}>
            <Text style={{ width: "80%" }}>
              {lastMessage.length > 38
                ? lastMessage.substring(0, 38) + "..."
                : lastMessage}
            </Text>
            {messageCount ? (
              <View style={ChatItemStyle.messageCounterContainer}>
                <Text style={ChatItemStyle.messageCounterText}>
                  {messageCount}
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