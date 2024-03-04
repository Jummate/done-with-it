import { View, Image } from "react-native";

import { styles } from "./styles";
import AppText from "../app-text/AppText";

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: `${image}` }}
      />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

export default ListItem;
