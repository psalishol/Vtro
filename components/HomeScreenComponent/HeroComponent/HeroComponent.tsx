import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../../constants/appColors";
import { screenHeight } from "../../../constants/screenSize";
import { HeaderComponent } from "./HeroSubComponents/HeaderComponent/HomeScreenHeader";
import WorkSpaceHeader from "./HeroSubComponents/WorkspaceComponent/WorkSpaceHeader";
import { WorkSpaceProjects } from "./HeroSubComponents/WorkspaceComponent/WorkSpaceProject";

const DUMMY_NAME = "Ishola Samuel";

export default function HeroComponent() {
  return (
    <View style={HeroComponentStyle.container}>
      <HeaderComponent userName={DUMMY_NAME} />
      <WorkSpaceHeader />
      <WorkSpaceProjects />
    </View>
  );
}

const HeroComponentStyle = StyleSheet.create({
  container: {
    height: screenHeight / 2.53,
    width: "100%",
    backgroundColor: colors.black,
  },
});
