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
    width: 50,
    height: 50,
    backgroundColor: colors.PRIMARY,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.SECONDARY,
    position: "absolute",
    top: 40,
    right: 30,
  },
});
