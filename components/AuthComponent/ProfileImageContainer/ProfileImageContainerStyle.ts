import { StyleSheet } from "react-native";
const ProfileImageStyle = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#9098B1",
  },
  picker: {
    borderRadius: 30,
    height: 28,
    width: 28,
    backgroundColor: "#307ef3",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 1,
    right: 1,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  container: {
    height: 100,
    width: 100,
    backgroundColor: "white",
    borderRadius: 100,
    alignSelf: "center",
    borderWidth: 1.5,
    borderColor: "#EBF0FF",
    marginTop: 20,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileImageStyle;
