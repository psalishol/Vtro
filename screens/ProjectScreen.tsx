import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from "react-native";
import React, { FunctionComponent } from "react";
import {
  MaterialIcons,
  Entypo,
  Foundation,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import CustomStatusBar from "../components/GlobalComponents/CustomStatusBar/CustomStatusBar";
import { colors } from "../constants/appColors";
import { ProjectScreenHeader } from "../components/ProjectScreen/HeaderComponent/HeaderComponent";
import DisplaySelector from "../components/ProjectScreen/DisplaySelector/DisplaySelector";
import { OnGoingProjects } from "../components/ProjectScreen/BoardTaskComponent/BoardTaskComponent";

export default function ProjectScreen() {
  return (
    <>
      <CustomStatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <SafeAreaView style ={{flex: 1, backgroundColor: 'white'}}>
      <ProjectScreenHeader />
      <DisplaySelector />
      <ScrollView horizontal>
        <OnGoingProjects />
        <OnGoingProjects />
        <OnGoingProjects />
      </ScrollView>
      </SafeAreaView>
    </>
  );
}

{
  /* <View style={{ backgroundColor: "lightgrey", height: "100%" }}></View> */
}
