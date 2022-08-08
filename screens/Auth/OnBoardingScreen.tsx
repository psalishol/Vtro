import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomStatusBar from "../../components/GlobalComponents/CustomStatusBar/CustomStatusBar";


import { useNavigation } from "@react-navigation/native";


export default function OnBoardingScreen() {
  const navigation = useNavigation()
  return (
    <View style = {{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <CustomStatusBar barStyle="dark-content" backgroundColor={'white'} />
      <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}
