import { View, Text, TouchableOpacity } from "react-native";
import React, { FunctionComponent } from "react";
import { Ionicons } from "@expo/vector-icons";
import HomeScreenHeaderStyle from "./HomeScreenHeaderStyle";
import AvatarMaker from "./AvatarMaker";

const DUMMY_NAME = "Ishola Samuel";

interface HeaderComponentProps {
  userName: String;
}

export const HeaderComponent: FunctionComponent<HeaderComponentProps> = ({
  userName,
}) => {
  return (
    <View style={HomeScreenHeaderStyle.headerContainer}>
      <AvatarMaker userFullName={userName} />
      <View style={HomeScreenHeaderStyle.headerTextContainer}>
        <Text style={HomeScreenHeaderStyle.welcome}>Welcome</Text>
        <Text style={HomeScreenHeaderStyle.userNameText}>{userName}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        style={HomeScreenHeaderStyle.notificationContainer}
      >
        <View>
          <Ionicons name="notifications" size={24} color="white" />
          <View style={HomeScreenHeaderStyle.notificationBadge} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
