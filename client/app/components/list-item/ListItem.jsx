import { View, Image, TouchableHighlight } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
// import Swipeable from "react-native-gesture-handler/Swipeable";
import { styles } from "./styles";
import AppText from "../app-text/AppText";
import { colors } from "../../shared/colors";

function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
          underlayColor={colors.LIGHT}
          onPress={onPress}
        >
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
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

export default ListItem;
