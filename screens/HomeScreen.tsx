import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, ScrollView } from "react-native";
import CustomStatusBar from "../components/GlobalComponents/CustomStatusBar/CustomStatusBar";
import HeroComponent from "../components/HomeScreenComponent/HeroComponent/HeroComponent";
import NewMeetingAlert from "../components/HomeScreenComponent/NewMeetingComponent/NewMeetingAlert";
import TasksComponent from "../components/HomeScreenComponent/TaskSection/TasksComponent";
import UnreadMessagesComponent from "../components/HomeScreenComponent/UnreadMessagesDisplay/UnreadMessagesComponent";
import { colors } from "../constants/Colors";
import { Auth, DataStore, Storage } from "aws-amplify";
import { User } from "../src/models";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function HomeScreen() {
  const [currentUserInfo, setCurrentUserInfo] = useState<User | undefined>();
  useEffect(() => {
    const fetchUserData = async () => {
      const authUser = await Auth.currentAuthenticatedUser();
      const currentUserData = await DataStore.query(User, authUser.attributes.sub);
      console.log('The current user data', currentUserData);
      setCurrentUserInfo(currentUserData);
    };
    fetchUserData();
  }, [])

  if (!currentUserInfo) {
    return <ActivityIndicator size={30} color = {colors.blue} style = {{justifyContent: 'center', alignItems: 'center'}} />;
  }
  return (
    <>
      <CustomStatusBar
        barStyle="light-content"
        backgroundColor={colors.black}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <HeroComponent  userName={currentUserInfo.fullName} />
        <ScrollView style={{ height: 470 }}>
          <UnreadMessagesComponent />
          <NewMeetingAlert />
          <TasksComponent />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
