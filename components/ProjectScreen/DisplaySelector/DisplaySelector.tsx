import { Foundation, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { DisplaySelectorStyle } from "./DisplaySelectorStyle";

const DisplaySelector = () => {
  return (
    <>
      <View style={DisplaySelectorStyle.container}>
        <View style={DisplaySelectorStyle.selectTypeContainer}>
          <Foundation name="pause" size={24} color="black" />
          <Text style={DisplaySelectorStyle.boardText}>Board View</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        </View>

        <View style={{ flexDirection: "row",}}>
          {[{ person: 1 }, { person: 2 }, { person: 3 }].map((item, index) => {
            return (
              <Image
                key={item.person}
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 30,
                  marginLeft: -10,
                }}
                source={{
                  uri: "https://img.freepik.com/free-photo/close-up-smiley-man-taking-selfie_23-2149155156.jpg?w=2000",
                }}
              />
            );
          })}
        </View>
      </View>
      <View style={{ height: 1, backgroundColor: "lightgrey" }} />
    </>
  );
};

export default DisplaySelector;
