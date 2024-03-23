import React from "react";
import { Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../../components/screen/Screen";
import { styles } from "./styles";
import AppTextInput from "../../components/app-textinput/AppTextInput";
import AppButton from "../../components/app-button/AppButton";
import AppText from "../../components/app-text/AppText";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/project-logo.jpeg")}
      />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppText style={{ color: "red" }}>{errors.email}</AppText>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              placeholder="Password"
              textContentType="password"
              secureTextEntry
            />
            <AppText style={{ color: "red" }}>{errors.password}</AppText>
            <AppButton
              title="LOG IN"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
}

export default LoginScreen;
