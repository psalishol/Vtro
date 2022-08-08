import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import CustomStatusBar from "../../components/GlobalComponents/CustomStatusBar/CustomStatusBar";
import TextInputComponent from "../../components/AuthComponent/TextInputFied/TextInputField";
import AuthButton from "../../components/AuthComponent/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from "yup";
import { SIGN_IN_OBJECT } from "./signUpObject";

const SignInValidationSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Enter your password"),
});

export default function SignInScreen() {
  const navigation = useNavigation();
  return (
    <>
      <CustomStatusBar barStyle="dark-content" backgroundColor={"#fff"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ marginTop: "50%" }}>
          <Text style={{ alignSelf: "center", fontSize: 20, fontWeight: 'bold', color: '#223263'}}>Welcome to Team Colab</Text>
          <Text style={{ alignSelf: "center", marginBottom: 30, fontSize: 14, fontWeight: '400', color: '#9098B1', }}>Sign In to continue</Text>
          <Formik
          validationSchema={SignInValidationSchema}
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => console.log(values)}
          >
            {({
              handleBlur,
              handleSubmit,
              handleChange,
              isValid,
              errors,
              values,
            }) => {
              return (
                <>
                  {SIGN_IN_OBJECT.map((item, index) => {
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
                  <AuthButton
                    buttonName="Sign In"
                    onSubmit={handleSubmit}
                    isValid={isValid}
                  />
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPassword')}
                  >
                    <Text
                      style={{
                        alignSelf: "center",
                        marginTop: 20,
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#307ef3",
                      }}
                    >
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: "row",
                      alignSelf: "center",
                      marginTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        color: '#9098B1'
                      }}
                    >
                      Dont have an Account?{" "}
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("SignUpScreen")}
                    >
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "bold",
                          color: "#307ef3",
                        }}
                      >
                        Register
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              );
            }}
          </Formik>
        </View>
      </SafeAreaView>
    </>
  );
}
