import React from "react";
import { Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../../components/screen/Screen";
import { styles } from "./styles";
// import AppTextInput from "../../components/app-textinput/AppTextInput";
import AppButton from "../../components/app-button/AppButton";
// import AppText from "../../components/app-text/AppText";
// import ErrorMessage from "../../components/ErrorMessage";
import AppFormField from "../../components/AppFormField";

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
        {({ handleSubmit }) => (
          <>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
            />

            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              textContentType="password"
              secureTextEntry
            />

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
