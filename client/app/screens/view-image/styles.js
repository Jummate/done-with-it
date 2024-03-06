import { StyleSheet } from "react-native";
import { colors } from "../../shared/colors";

export const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: colors.BLACK,
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});
