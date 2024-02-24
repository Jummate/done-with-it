import { View, ImageBackground, Image, Text } from "react-native";
import { styles } from "./styles";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/background-home.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/project-logo.jpeg")}
        />
        <Text>Lorem ipsum Lorem ipsum Lorem ipsum</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

export default WelcomeScreen;
