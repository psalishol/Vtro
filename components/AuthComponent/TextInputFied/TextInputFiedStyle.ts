import { StyleSheet } from "react-native";
import { screenHeight } from "../../../constants/dimension";

interface StyleProps {
  focused: boolean;
  isValid: boolean;
}

const TextInputFieldStyle = ({ focused }: StyleProps) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#fff",
      marginHorizontal: 20,
      borderRadius: 10,
      padding: screenHeight / 130,
      borderWidth: 1.5,
      borderColor: `${focused ? "#8fb9ff" : "#EBF0FF"}`,
      marginVertical: 10,
    },
    errorText: {
      fontSize: 12,
      fontWeight: "bold",
      color: "#d56076",
      marginLeft: 20,
      marginTop: -5,
    },
  });

export default TextInputFieldStyle;
