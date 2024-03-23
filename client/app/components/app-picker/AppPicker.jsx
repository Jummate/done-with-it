import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "../../shared/colors";
import AppText from "../app-text/AppText";

function AppPicker({ icon, placeholder }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.MEDIUM}
          style={styles.icon}
        />
      )}
      <AppText style={styles.text}>{placeholder}</AppText>

      <MaterialCommunityIcons
        name="chevron-down"
        size={20}
        color={colors.MEDIUM}
      />
    </View>
  );
}

export default AppPicker;
