import { Image, View } from "react-native";
import { styles } from "./styles";
import AppText from "../app-text/AppText";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={{ width: "100%", height: 200, uri: image }} />
      <View style={styles.detailsContainer}>
        <AppText>{title}</AppText>
        <AppText>{subTitle}</AppText>
      </View>
    </View>
  );
}

export default Card;
