import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import { BottomTabNavigation } from "./BottomNavigation";
import SignInScreen from "../screens/Auth/SignInScreen";
import OnBoardingScreen from "../screens/Auth/OnBoardingScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen";
import ConfirmRegistrationScreen from "../screens/Auth/ConfirmRegistrationScreen";
import ForgotPassword from "../screens/Auth/ForgotPassword";

const Stack = createStackNavigator();

const SlideTransition = {
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            translateX: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -layouts.screen.width],
                })
              : 1,
          },
        ],
      },
    };
  },
};

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};



const SignedOutNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
      }}
    >
      <Stack.Screen
        name="SignInScreen"
        options={{
          ...SlideTransition,
        }}
        component={SignInScreen}
      />
      <Stack.Screen
        name="ForgotPassword"
        options={{
          ...SlideTransition,
        }}
        component={ForgotPassword}
      />
      <Stack.Screen
        name="OnBoardingScreen"
        options={{
          ...SlideTransition,
        }}
        component={OnBoardingScreen}
      />
      <Stack.Screen
        name="SignUpScreen"
        options={{
          ...SlideTransition,
        }}
        component={SignUpScreen}
      />
      <Stack.Screen
        name="ConfirmRegistrationScreen"
        options={{
          ...SlideTransition,
        }}
        component={ConfirmRegistrationScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const SignedInNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
      }}
    >
      <Stack.Screen name="BottomNavigation" component={BottomTabNavigation} />
      <Stack.Screen
        name="ChatRoomScreen"
        options={{
          ...SlideTransition,
        }}
        component={ChatRoomScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export { SignedInNavigation, SignedOutNavigation };
