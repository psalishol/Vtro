import { StyleSheet } from "react-native";

const HomeScreenHeaderStyle = StyleSheet.create({
  welcome: {
    fontSize: 16,
    fontWeight: "500",
    color: "grey",
  },
  notificationContainer: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#191d24",
    borderRadius: 30,
  },
  notificationBadge: {
    height: 8,
    width: 8,
    backgroundColor: "red",
    borderRadius: 10,
    position: "absolute",
    top: 0,
    right: 3,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: "bold",
  },

  headerContainer: {
    marginHorizontal: 10,
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "red",
  },

  userNameText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },

  avatar: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 40,
    backgroundColor: "white",
  },
  headerTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
});

export default HomeScreenHeaderStyle;
