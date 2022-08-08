import { StyleSheet } from "react-native";

const ChatItemStyle = StyleSheet.create({
  secondRowContainer: {
    marginLeft: 10,
    width: "78%",
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  messageCounterText: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
  messageCounterContainer: {
    height: 15,
    width: 15,
    backgroundColor: "blue",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  lastMessage: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  container: {
    marginTop: 20,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  firstRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ChatItemStyle;
