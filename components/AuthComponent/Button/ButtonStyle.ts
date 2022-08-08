import { StyleSheet } from "react-native";
interface StyleProps {
  isValid: boolean;
}

const ButtonStyle = ({ isValid }: StyleProps) =>
  StyleSheet.create({
    text: {
      fontSize: 20,
      color: "white",
      fontWeight: "bold",
    },
    container: {
      height: 50,
      marginTop: 30,
      borderRadius: 10,
      backgroundColor: isValid ? "#307ef3" : "#6ea5f7",
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 20,
    //   shadowColor: "#307ef3",
      shadowColor: "#accbfa",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 6,
      
    },
  });

export default ButtonStyle;
