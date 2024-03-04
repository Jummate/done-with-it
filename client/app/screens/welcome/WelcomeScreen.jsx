import { View, ImageBackground, Image, Text } from "react-native";
import { styles } from "./styles";
import AppButton from "../../components/app-button/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={4}
      style={styles.background}
      source={require("../../assets/background-home.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/project-logo.jpeg")}
        />
        <Text style={styles.tagLine}>Lorem ipsum Lorem ipsum Lorem ipsum</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton title="Log in" />
        <AppButton
          title="Register"
          bgColor="SECONDARY"
        />
      </View>
      {/* <View style={styles.loginButton}></View> */}
      {/* <View style={styles.registerButton}></View> */}
    </ImageBackground>
  );
}

export default WelcomeScreen;
