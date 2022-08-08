import React from "react";
import { GestureResponderEvent, TouchableOpacity, Text } from "react-native";
import ButtonStyle from "./ButtonStyle";

interface ButtonProps {
  buttonName: string;
  isValid?: boolean;
  onSubmit?:  any;
}

const AuthButton = ({ onSubmit, isValid, buttonName }: ButtonProps) => (
  <TouchableOpacity
    onPress={onSubmit}
    activeOpacity={0.8}
    style={ButtonStyle({ isValid }).container}
  >
    <Text style={ButtonStyle({ isValid }).text}>{buttonName}</Text>
  </TouchableOpacity>
);

export default AuthButton;
