import { Text, TouchableOpacity } from "react-native";
import { colors } from "../../shared/colors";
import { styles } from "./styles";

function AppButton({ title, bgColor = "PRIMARY" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[bgColor] }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
