import { StyleSheet, Platform } from "react-native";
import { colors } from "../../shared/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.LIGHT,
    borderRadius: 20,
    flexDirection: "row",
    // width: "100%",
    marginVertical: 10,
    padding: 15,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: colors.MEDIUM,
    flex: 1,
  },
  //   textInput: {
  //     fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  //     fontSize: 18,
  //     color: colors.DARK,
  //   },
});
