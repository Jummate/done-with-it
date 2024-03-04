import { View, Image } from "react-native";
import { styles } from "./styles";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../assets/project-image4.jpg")}
      />
    </View>
  );
}

export default ViewImageScreen;
