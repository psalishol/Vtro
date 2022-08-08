import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { screenHeight } from "../../../constants/dimension";

export default function PhoneNumberComponent({
  handleChange,
  handleBlur,
  phoneValue,
 
}) {
  //   const initialFlag = "https://countryflagsapi.com/png/NG";
  const [currentCountryCode, setCurrentCountryCode] = useState("NG");

  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(false);

  const FLAG_API = `https://countryflagsapi.com/:filetype/${currentCountryCode}`;

  const onFocused = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
    handleBlur;
    setTouched(true);
  };
  useEffect(() => {}, [currentCountryCode]);

  return (
    <View style={{ flexDirection: "row" }}>
      <CountryCodeComponent />

      <TextInput
        keyboardType="phone-pad"
        value={phoneValue}
        style={{
          width: 200,
          marginLeft: 10,
          padding: 10,
          backgroundColor: "white",
          flex: 1,
          marginRight: 20,
          borderRadius: 10,
          borderWidth: 1.5,
          borderColor: `${focused ? "#8fb9ff" : "#EBF0FF"}`,
        }}
        onChangeText={handleChange}
        onFocus={onFocused}
        onBlur={onBlur}
        placeholder="Phone Number"
      />
    </View>
  );
}

const CountryCodeComponent = () => {
  const initialFlag = "https://countryflagsapi.com/png/NG";
  const [selectedCountryImageUri, setSelectedCountryImageUri] =
    useState(initialFlag);

  //   const [isCountrySelectionOpened, setIsCountrySelectionOpened] =
  //     useState(false);
  //   console.log(isCountrySelectionOpened);

  const [inputContainerY, setInputContainerY]= useState(0)
  return (
    <TouchableOpacity
        activeOpacity={1}
      style={{
        flexDirection: "row",
        marginLeft: 20,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: "#EBF0FF",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        style={{ height: 15, width: 22, marginRight: 10 }}
        source={{ uri: selectedCountryImageUri }}
      />
      <Text>+234</Text>
      <MaterialIcons name="arrow-drop-down" size={24} color="lightgrey" />
    </TouchableOpacity>
  );
};
