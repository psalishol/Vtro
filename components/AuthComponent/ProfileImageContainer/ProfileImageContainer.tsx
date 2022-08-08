import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import ProfileImageStyle from "./ProfileImageContainerStyle";
interface ProfileImageUriProps {
  setProfileImageUri: any;
}

const ProfileImageContainer = ({
  setProfileImageUri,
}: ProfileImageUriProps) => {
  const [selectedImageUri, setSelectedImageUri] = useState("");

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      console.log(result);
      setSelectedImageUri(result.uri);
      setProfileImageUri(result.uri);
    }
  };

  return (
    <View style={ProfileImageStyle.container}>
      {selectedImageUri ? (
        <Image
          style={ProfileImageStyle.image}
          source={{ uri: selectedImageUri }}
        />
      ) : (
        <Text style={ProfileImageStyle.text}> Choose Picture</Text>
      )}
      <TouchableOpacity onPress={() => pickImage()} style={ProfileImageStyle.picker}>
        <MaterialIcons
          name={selectedImageUri ? "edit" : "camera-alt"}
          size={16}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileImageContainer;
