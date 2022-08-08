import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { FunctionComponent, useState } from "react";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import TaskComponentStyle from "./TaskComponentStyle";

interface TaskItemProps {
  taskTitle: String;
  workSpaceTitle: String;
}

const TaskItems: FunctionComponent<TaskItemProps> = ({
  taskTitle,
  workSpaceTitle,
}) => {
  // const TaskCompleted = false;
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <View style={TaskComponentStyle.taskContainer}>
      <FontAwesome5 name="tasks" size={24} color="#ebe8e8" />
      <TouchableOpacity
        onPress={() => setIsCompleted(!isCompleted)}
        style={
          isCompleted
            ? TaskComponentStyle.completedTask
            : TaskComponentStyle.uncompletedTask
        }
      >
        {isCompleted ? (
          <MaterialIcons name="done" size={18} color="white" />
        ) : null}
      </TouchableOpacity>
      <View>
        <Text style={TaskComponentStyle.taskTitle}>{taskTitle}</Text>
        <Text style={TaskComponentStyle.workspaceName}>{workSpaceTitle}</Text>
      </View>
    </View>
  );
};

export default TaskItems;

