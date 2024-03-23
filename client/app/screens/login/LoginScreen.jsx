import React from "react";
import { Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../../components/screen/Screen";
import { styles } from "./styles";
import AppTextInput from "../../components/app-textinput/AppTextInput";
import AppButton from "../../components/app-button/AppButton";
import AppText from "../../components/app-text/AppText";
import ErrorMessage from "../../components/ErrorMessage";

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
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
              placeholder="Email"
              textContentType="emailAddress"
            />
            <ErrorMessage
              error={errors.email}
              visible={touched.email}
            />
            {/* {touched.email && <ErrorMessage error={errors.email} />} */}
            {/* <AppText style={{ color: "red" }}>{errors.email}</AppText> */}
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
              placeholder="Password"
              textContentType="password"
              secureTextEntry
            />

            <ErrorMessage
              error={errors.password}
              visible={touched.password}
            />
            {/* {touched.password && <ErrorMessage error={errors.password} />} */}
            {/* <AppText style={{ color: "red" }}>{errors.password}</AppText> */}
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
