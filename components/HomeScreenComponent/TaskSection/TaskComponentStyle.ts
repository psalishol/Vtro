import { StyleSheet } from "react-native";

const TaskComponentStyle = StyleSheet.create({
  headerContainer: { flexDirection: "row", margin: 10 },
  yourTask: { flex: 1, fontSize: 18, fontWeight: "bold" },
  selectDateContainer: { flexDirection: "row", alignItems: "center" },
  text: { fontSize: 16, fontWeight: "500" },
  taskContainer: {
    height: 70,
    marginHorizontal: 20,
    borderColor: "#ebe8e8",
    borderRadius: 7,
    borderWidth: 1.5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  taskTitle: { fontSize: 18, fontWeight: "600" },
  workspaceName: {
    fontSize: 15,
    fontWeight: "400",
    marginTop: 10,
    color: "grey",
  },
  completedTask: {
    backgroundColor: "#33C691",
    borderRadius: 20,
    height: 25,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
  },
  uncompletedTask: {
    marginHorizontal: 15,
    borderRadius: 20,
    height: 25,
    width: 25,
    borderWidth: 1.5,
    borderColor: "grey",
  },
});

export default TaskComponentStyle;
