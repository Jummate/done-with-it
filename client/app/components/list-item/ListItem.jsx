import { View, Image, TouchableHighlight } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
// import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import AppText from "../app-text/AppText";
import { colors } from "../../shared/colors";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
          underlayColor={colors.LIGHT}
          onPress={onPress}
        >
          <View style={styles.container}>
            {IconComponent}
            {image && (
              <Image
                style={styles.image}
                source={{ uri: `${image}` }}
              />
            )}
            <View style={styles.detailsContainer}>
              <AppText
                style={styles.title}
                numberOfLines={1}
              >
                {title}
              </AppText>
              {subTitle && (
                <AppText
                  style={styles.subTitle}
                  numberOfLines={2}
                >
                  {subTitle}
                </AppText>
              )}
            </View>
            <MaterialCommunityIcons
              color={colors.MEDIUM}
              name="chevron-right"
              size={25}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

export default ListItem;
