import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import * as yup from "yup";
import React, { useState } from "react";
import CustomStatusBar from "../../components/GlobalComponents/CustomStatusBar/CustomStatusBar";
import TextInputComponent from "../../components/AuthComponent/TextInputFied/TextInputField";
import { SIGNUP_OBJECT } from "./signUpObject";
import { Formik, FormikErrors } from "formik";
import AuthButton from "../../components/AuthComponent/Button/Button";
import ProfileImageContainer from "../../components/AuthComponent/ProfileImageContainer/ProfileImageContainer";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../constants/appColors";
import PhoneNumberComponent from "../../components/AuthComponent/PhoneNumberComponent/PhoneNumberComponent";
// import { FlatList } from "react-native-gesture-handler";
import CountryCodes from "../../assets/CountryCodes";
const validationSchema = yup.object().shape({
  profileImageUri: yup
    .string()
    .required("Choose a well lighted picture of yours"),
  name: yup.string().required("Enter your name"),
  email: yup.string().email().required("Enter your email"),
  title: yup.string().required("Enter your job title"),
  favouriteQuote: yup.string(),
  phoneNumber: yup
    .number()
    .lessThan(10, "Not a valid phone number")
    // .min(10, "Not a valid phone number")
    .required("Enter your phone number"),
  password: yup
    .string()
    .required("Set your password")
    .min(7, "password must be more than 7 characters"),
});

export default function SignUpScreen() {
  const [isCountrySelectionOpened, setIsCountrySelectionOpened] =
    useState(false);
  const navigation = useNavigation();
  const initialValue = {
    name: "",
    email: "",
    title: "",
    favouriteQuote: "",
    password: "",
    profileImageUri: "",
    phoneNumber: "",
  };

  return (
    <>
      <CustomStatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ margin: 20 }}
        >
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <ScrollView>
          <Formik
            validateOnMount={true}
            validationSchema={validationSchema}
            initialValues={initialValue}
            onSubmit={(values) => {
              console.log(values);
              navigation.navigate<any>("ConfirmRegistrationScreen");
            }}
          >
            {({
              handleBlur,
              handleChange,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => {
              return (
                <>
                  <ProfileImageContainer
                    setProfileImageUri={handleChange("profileImageUri")}
                  />
                  {SIGNUP_OBJECT.map((item, index) => {
                    return (
                      <TextInputComponent
                        isValid
                        error={errors[item.key]}
                        value={values[item.key]}
                        handleBlur={handleBlur(item.key)}
                        handleChange={handleChange(item.key)}
                        key={item.id}
                        hint={item.hint}
                        iconName={item.iconName}
                        isPassword={item.isPassword}
                      />
                    );
                  })}
                  <PhoneNumberComponent
                    handleChange={handleChange("phoneNumber")}
                    handleBlur={handleBlur("phoneNumber")}
                    phoneValue={values.phoneNumber}
                  />
                  <TextInputComponent
                    isValid
                    error={errors.password}
                    value={values.password}
                    handleBlur={handleBlur("password")}
                    handleChange={handleChange("password")}
                    hint={"Password"}
                    iconName={"lock-outline"}
                    isPassword={true}
                  />

                  <AuthButton
                    isValid={isValid}
                    buttonName="Confirm Registration"
                    onSubmit={handleSubmit}
                  />
                </>
              );
            }}
          </Formik>

          <View
            style={{ flexDirection: "row", alignSelf: "center", marginTop: 15 }}
          >
            <Text style={{ fontWeight: "bold", color: "#9098B1" }}>
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ fontWeight: "bold", color: colors.blue }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
