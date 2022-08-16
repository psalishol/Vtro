import { View, Text } from "react-native";
import React, { useState } from "react";
import PhoneNumberComponent from "../PhoneNumberComponent/PhoneNumberComponent";
import TextInputComponent from "../TextInputFied/TextInputField";
import AuthButton from "../Button/Button";
import { SIGNUP_OBJECT } from "./FormObject";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import ProfileImageContainer from "../ProfileImageContainer/ProfileImageContainer";
import { Auth } from "aws-amplify";
import { SignUpValidationSchema } from "./ValidationSchema";
import { Storage } from "aws-amplify";

export default function SignUpForm() {
  const navigation = useNavigation();
  const [userProfileImageUri, setUserProfileImageUri] = useState<String>();
  const [loading, setLoading] = useState<boolean>(false);
  const onRegister = async (data: {
    email: string;
    password: string;
    name: string;
    profileImageUri: string;
    phoneNumber: string;
    title: string;
  }) => {
    const { email, password, name, profileImageUri, phoneNumber, title } = data;

    try {
      setLoading(true);
      const response = await fetch(profileImageUri);
      const blob = await response.blob();
      await Storage.put(`${email}_user_profile_image.jpg`, blob)
        .then(async (response) => await Storage.get(response.key))
        .then(
          async (imageUri) =>
            await Auth.signUp({
              username: email,
              password,
              attributes: {
                name: name,
                picture: imageUri,
                phone_number: `+234${phoneNumber}`,
                given_name: title,
              },
            })
        )
        .finally(() => {
          console.log("Signed Up Successfully!! 🔥 🔥");
          setLoading(false);
          console.log("User Data", {
            ...data,
            profileImageUri: userProfileImageUri,
          });
          navigation.navigate<any>("ConfirmRegistrationScreen", { email });
        })
        .catch((error) => {
          setLoading(false);
          console.log("There an error signing up ==> 😢 😢");
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    } catch (e) {
      console.log(e);
    }
  };
  const initialValue = {
    name: "",
    email: "",
    title: "",
    // role: "",
    password: "",
    profileImageUri: "",
    phoneNumber: "",
  };
  return (
    <View>
      <Formik
        validateOnMount={true}
        validationSchema={SignUpValidationSchema}
        initialValues={initialValue}
        onSubmit={(values) => {
          onRegister(values);
          // console.log(values);
          // console.log(values.phoneNumber.length);
          // navigation.navigate<any>("ConfirmRegistrationScreen");
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
                const key = item.key;
                return (
                  <TextInputComponent
                    isValid
                    error={errors[key]}
                    value={values[key]}
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
                isloading={loading}
                isValid={isValid}
                buttonName="Confirm Registration"
                onSubmit={handleSubmit}
              />
            </>
          );
        }}
      </Formik>
    </View>
  );
}
