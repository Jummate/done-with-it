import { Text } from "react-native";
import { styles } from "./styles";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>; //Accept extra styles dynamically
}

export default AppText;
