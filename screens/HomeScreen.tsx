import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import CustomStatusBar from "../components/GlobalComponents/CustomStatusBar/CustomStatusBar";
import HeroComponent from "../components/HomeScreenComponent/HeroComponent/HeroComponent";
import NewMeetingAlert from "../components/HomeScreenComponent/NewMeetingComponent/NewMeetingAlert";
import TasksComponent from "../components/HomeScreenComponent/TaskSection/TasksComponent";
import UnreadMessagesComponent from "../components/HomeScreenComponent/UnreadMessagesDisplay/UnreadMessagesComponent";
import { colors } from "../constants/appColors";

export default function HomeScreen() {
  return (
    <>
      <CustomStatusBar
        barStyle="light-content"
        backgroundColor={colors.black}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <HeroComponent />
        <ScrollView style={{ height: 470 }}>
          <UnreadMessagesComponent />
          <NewMeetingAlert />
          <TasksComponent />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
