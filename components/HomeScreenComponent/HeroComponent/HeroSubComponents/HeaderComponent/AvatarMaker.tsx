import React, { FunctionComponent } from "react";
import { View , Text} from "react-native";
import HomeScreenHeaderStyle from "./HomeScreenHeaderStyle";


interface AvatarMakerProps {
    userFullName: String;
  }


const AvatarMaker: FunctionComponent<AvatarMakerProps> = ({ userFullName }) => {
    let AVATAR_DISPLAY_NAME = "";
    userFullName.split(" ").length < 2
      ? (AVATAR_DISPLAY_NAME = userFullName.split(" ")[0][0].toUpperCase())
      : (AVATAR_DISPLAY_NAME =
          userFullName.split(" ")[0][0].toUpperCase() +
          userFullName.split(" ")[1][0].toUpperCase());
    return (
      <View style={HomeScreenHeaderStyle.avatar}>
        <Text style={HomeScreenHeaderStyle.avatarText}>
          {AVATAR_DISPLAY_NAME}
        </Text>
      </View>
    );
  };
  

export default AvatarMaker;
  