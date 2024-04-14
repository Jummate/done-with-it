import { Text } from "react-native";
import { styles } from "./styles";

function AppText({ children, numberOfLines, style }) {
  return (
    <Text
      style={[styles.text, style]}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  ); //Accept extra styles dynamically
}

export default AppText;
