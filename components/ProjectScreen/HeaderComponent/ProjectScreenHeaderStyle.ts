
import { StyleSheet } from "react-native";


 const ProjectScreenHeaderStyle = StyleSheet.create({
    addCollaborator: { marginHorizontal: 15 },
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 15,
    },
    navigateBack: { marginHorizontal: 10 },
    avatar: {
      height: 35,
      marginRight: 10,
      backgroundColor: "purple",
      width: 35,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
    avatarText: { fontSize: 18, fontWeight: "bold", color: "white" },
  
    projectTitle: { fontSize: 16, flex: 1, fontWeight: "bold" },
    actionButtonContainer: { flexDirection: "row", marginRight: 10 },
  });
  

  export default ProjectScreenHeaderStyle;