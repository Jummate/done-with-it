import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";

function Icon({ name, size = 40, bgColor = "#000", iconColor = "#fff" }) {
  return (
    <View
      style={[
        styles.icon,
        {
          height: size,
          width: size,
          borderRadius: size / 2,
          backgroundColor: bgColor,
        },
      ]}
    >
      <MaterialCommunityIcons
        name={name}
        color={iconColor}
        size={size * 0.5}
      />
    </View>
  );
}

export default Icon;
