import React, { useState } from "react";
import { Image } from "react-native";

import Screen from "../../components/screen/Screen";
import { styles } from "./styles";
import AppTextInput from "../../components/app-textinput/AppTextInput";
import AppButton from "../../components/app-button/AppButton";

function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/project-logo.jpeg")}
      />

      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        textContentType="emailAddress"
        value={email}
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        textContentType="password"
        secureTextEntry
      />
      <AppButton
        title="LOG IN"
        onPress={() => console.log(email, password)}
      />
    </Screen>
  );
}

export default LoginScreen;
