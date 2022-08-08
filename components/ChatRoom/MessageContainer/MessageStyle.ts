import { StyleSheet, ViewStyle } from "react-native";


interface StyleProps{
    length: Number
}


export const MessageStyles = StyleSheet.create({
  myMessageContainer:{
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginRight: 10,
    marginLeft: "auto",
  },
  myMessageSmallTextContainer: {
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginRight: 10,
    marginLeft: "auto",
  },


  myMessageText: {
    color: "black",
  },
  receiverMessageText: {
    color: "#fff",
  },
  receiverMessageContainer: {
    backgroundColor: "#3872E9",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
    width: "70%",
    marginRight: "auto",
  },
  receiverSmallTextContainer: {
    backgroundColor: "#3872E9",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,

    marginRight: "auto",
  },
});
