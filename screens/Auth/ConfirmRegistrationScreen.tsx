import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React, { LegacyRef, useRef, useState } from "react";
import CustomStatusBar from "../../components/GlobalComponents/CustomStatusBar/CustomStatusBar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ConfirmRegistrationScreen({
  email = "psalishol80@gmail.com",
}) {
  const [otp, setOtp] = useState({
    firstInput: "",
    secondInput: "",
    thirdInput: "",
    fourthInput: "",
  });
  const firstInput = useRef<any>();
  const secondInput =useRef<any>();
  const thirdInput = useRef<any>();
  const fourthInput = useRef<any>();
  const navigation = useNavigation();

  const getOtp = (otp) =>
    console.log(
      `${otp.firstInput}${otp.secondInput}${otp.thirdInput}${otp.fourthInput}`
    );

  //   console.log(otp)
  return (
    <>
      <CustomStatusBar barStyle="dark-content" backgroundColor={"white"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ margin: 10 }}
        >
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 24 }}>
          Email Verification
        </Text>
        <Text style={{ textAlign: "center", marginTop: 10 }}>
          We have sent an otp to your email{" "}
        </Text>
        <Text style={{ fontSize: 12, fontWeight: "500", textAlign: "center" }}>
          {email}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginHorizontal: 90,
            marginTop: 30,
          }}
        >
          <View style={styles.textInputContainer}>
            <TextInput
              keyboardType="phone-pad"
              style={styles.text}
              maxLength={1}
              autoFocus={true}
              ref={firstInput}
              onChangeText={(text) => {
                setOtp({ ...otp, firstInput: text });
                text ? secondInput.current.focus() : firstInput.current.focus();
              }}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              keyboardType="phone-pad"
              style={styles.text}
              maxLength={1}
              ref={secondInput}
              onChangeText={(text) => {
                setOtp({ ...otp, secondInput: text });
                text ? thirdInput.current.focus() : secondInput.current.focus();
              }}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              keyboardType="phone-pad"
              style={styles.text}
              maxLength={1}
              ref={thirdInput}
              onChangeText={(text) => {
                setOtp({ ...otp, thirdInput: text });
                text ? fourthInput?.current?.focus() : thirdInput?.current?.focus();
              }}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              keyboardType="phone-pad"
              style={styles.text}
              maxLength={1}
              ref={fourthInput}
              onChangeText={(text) => {
                setOtp({ ...otp, fourthInput: text });
                // query? secondInput.current.unfocus() : fourthInput.current.focus()
              }}
            />
          </View>
        </View>
        <Text style={{ textAlign: "center", marginTop: 30 }}>
          Resend Code after 28s
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity>
            <Text>Resend Code</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getOtp(otp)}>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

interface CodeInputContainerProps {
  ref: LegacyRef<TextInput> | undefined;
}

const CodeInputContainer = ({ ref }: CodeInputContainerProps) => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.text}
        maxLength={1}
        ref={ref}
        onChangeText={(query) => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#EBF0FF",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: 'red',
    paddingHorizontal: 10,
  },
});
