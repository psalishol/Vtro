import { MaterialIcons } from "@expo/vector-icons";
import React, { Dispatch, SetStateAction, useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";

import { screenHeight, screenWidth } from "../../../constants/dimension";
import TextInputFieldStyle from "./TextInputFiedStyle";
interface TextInputProps {
  hint: string;
  iconName: any;
  isPassword: boolean;
  handleChange?: any;
  handleBlur?: any;
  value?: any;
  error?: any;
  isValid?: boolean;
}

const TextInputComponent = ({
  hint,
  iconName,
  isPassword,
  handleChange,
  handleBlur,
  error,
  isValid,
}: TextInputProps) => {
  const [obscurePassword, setobscurePassword] = useState(true);
  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(false);

  const onFocused = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
    handleBlur;
    setTouched(true);
  };

  return (
    <View>
      <View style={TextInputFieldStyle({ focused, isValid }).container}>
        <MaterialIcons
          name={iconName}
          size={24}
          color={focused ? "#307ef3" : "#9098B1"}
        />
        <View style={{ marginLeft: 10, justifyContent: "space-between" }}>
          <TextInput
            secureTextEntry={isPassword ? obscurePassword : false}
            onChangeText={handleChange}
            onFocus={onFocused}
            onBlur={onBlur}
            autoComplete="off"
            autoCorrect={false}
            style={{
              width: screenWidth - 120,
              paddingVertical: 5,
              fontSize: 16,
              fontWeight: "400",
              // color: "#9098B1",
            }}
            placeholder={hint}
          />
        </View>
        {isPassword ? (
          <TouchableOpacity
            onPress={() => setobscurePassword(!obscurePassword)}
          >
            <MaterialIcons
              name="remove-red-eye"
              size={24}
              color={obscurePassword ? "grey" : "#307ef3"}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      {/* {error && touched ? (
        <Text style={TextInputFieldStyle({ focused }).errorText}>{error}</Text>
      ) : null} */}
    </View>
  );
};

export default TextInputComponent;
