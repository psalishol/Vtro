import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React, { FunctionComponent } from "react";
import { View, Text,Image, ScrollView } from "react-native";


export const OnGoingProjects = () => {

    return(
        <ScrollView showsVerticalScrollIndicator = {false }>
            <BoardTaskComponent />
            <BoardTaskComponent />
            <BoardTaskComponent />
            <BoardTaskComponent />
            <BoardTaskComponent />
            <BoardTaskComponent />
            <BoardTaskComponent />
        </ScrollView>
    )
}


interface BoardTaskComponentProps {
    taskTitle?: String;
    taskId?: String;
    taskIcon?: String;
    assingedMemberProfileImage?: Array<String>;
    taskPriority?: String;
    commentCount?: Number;
    taskCount?: Number;
  }
  
   const BoardTaskComponent: FunctionComponent<BoardTaskComponentProps> = () => (
    <View
      style={{
        elevation: 4,
        height: 150,
        width: 350,
        borderWidth: 1.5,
        borderColor: "#e0e0e0",
        borderRadius: 15,
        padding: 15,
        backgroundColor: "white",
        marginLeft: 20,
        marginTop: 20,
        justifyContent: 'space-between'
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
     
        Overview and briefHubspot
      </Text>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{ flexDirection: "row", marginRight: 20, alignItems: "center" }}
        >
          <FontAwesome5 name="tasks" size={14} color="black" />
          <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: "500" }}>
            343
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign name="message1" size={14} color="black" />
          <Text style={{ marginLeft: 10, fontSize: 14, fontWeight: "500" }}>
            23
          </Text>
        </View>
      </View>
  
      <View style={{ height: 1, backgroundColor: "#e0e0e0" }} />
  
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
        <View
          style={{ padding: 10, backgroundColor: "tomato", borderRadius: 10 }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "700",}}>
            High Priority
          </Text>
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
    </View>
  );
  
  
  export default BoardTaskComponent;