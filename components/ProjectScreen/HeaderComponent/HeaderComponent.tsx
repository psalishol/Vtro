import { Entypo, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import ProjectScreenHeaderStyle from "./ProjectScreenHeaderStyle";

export const ProjectScreenHeader = () => (
  <>
    <View style={ProjectScreenHeaderStyle.headerContainer}>
      <TouchableOpacity>
        <MaterialIcons
          style={ProjectScreenHeaderStyle.navigateBack}
          name="arrow-back"
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <View style={ProjectScreenHeaderStyle.avatar}>
        <Text style={ProjectScreenHeaderStyle.avatarText}>JP</Text>
      </View>
      <Text style={ProjectScreenHeaderStyle.projectTitle}>Jimmy's Project</Text>
      <View style={ProjectScreenHeaderStyle.actionButtonContainer}>
        <TouchableOpacity style={ProjectScreenHeaderStyle.addCollaborator}>
          <MaterialIcons name="person-add-alt-1" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
    <View style={{ height: 1, backgroundColor: "lightgrey" }} />
  </>
);
