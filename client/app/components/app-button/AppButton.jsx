import { Text, TouchableOpacity } from "react-native";
import { colors } from "../../shared/colors";
import { styles } from "./styles";

function AppButton({ title, bgColor = "PRIMARY", onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[bgColor] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
