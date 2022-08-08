import { StyleSheet } from "react-native";
import { screenHeight } from "../../../../../constants/screenSize";
const WorkSpaceStyle = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: screenHeight / 75.9,
    alignItems: "center",
  },
  itemContainer: {
    marginHorizontal: 10,
    height: screenHeight / 5.06,
    width: 150,
    backgroundColor: "#191d24",
    marginTop: screenHeight / 58.38,
    borderRadius: 15
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  viewAllStyle: {
    fontSize: 14,
    color: "grey",
    fontWeight: "bold",
  },
});

export default WorkSpaceStyle;
