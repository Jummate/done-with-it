import { SafeAreaView, View } from "react-native";
import { styles } from "./styles";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

export default Screen;
