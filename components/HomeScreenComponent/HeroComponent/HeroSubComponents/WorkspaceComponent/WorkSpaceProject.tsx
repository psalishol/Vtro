// const height = useWindowDimensions().height
// The height of ios screen is 926 and the width is 428

import React, { FunctionComponent } from "react";
import { Entypo } from "@expo/vector-icons";
import { screenHeight } from "../../../../../constants/screenSize";

import { TouchableOpacity, View, Text, FlatList } from "react-native";
import WorkSpaceStyle from "./WorkSpaceComponentStyle";

interface WorkSpaceItemProps {
  projectId: String;
  projectName: String;
  taskCount: Number;
}

export const WorkSpaceProjects = () => (
  <View>
    <FlatList
    horizontal
      data={[{ project: 1 }, { project: 2 }, { project: 3 }]}
      renderItem={({ item }) => (
        <WorkSpaceItem
          projectId={"2323"}
          projectName={"Jimmy Project"}
          taskCount={30}
        />
      )}
    />
  </View>
);

export const WorkSpaceItem: FunctionComponent<WorkSpaceItemProps> = ({
  projectId,
  projectName = "Jimmy's Project",
  taskCount = 23,
}) => {
  return (
    <View style={WorkSpaceStyle.itemContainer}>
      <TouchableOpacity activeOpacity={0.9} style={{ flex: 1 }}>
        <Entypo
          style={{ alignSelf: "flex-end", marginRight: 15, marginTop: 7 }}
          name="dots-three-horizontal"
          size={20}
          color="grey"
        />
      </TouchableOpacity>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
          {projectName}
        </Text>
        <Text style={{ fontSize: 16, color: "grey", fontWeight: "400" }}>
          {taskCount} Task
        </Text>
      </View>
    </View>
  );
};
