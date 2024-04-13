import React from "react";
import { TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "../../shared/colors";

function AppTextInput({ icon, ...otherProps }) {
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
      <TextInput
        placeholderTextColor={colors.MEDIUM}
        style={styles.textInput}
        {...otherProps}
      ></TextInput>
    </View>
  );
}

export default AppTextInput;
