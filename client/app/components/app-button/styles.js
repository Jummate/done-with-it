import { StyleSheet } from "react-native";
import { colors } from "../../shared/colors";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.PRIMARY,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    padding: 15,
    width: "100%",
    marginVertical: 12,
  },
  text: {
    color: colors.WHITE,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
