import { StyleSheet } from "react-native";
import { colors } from "../../shared/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: { height: 70, width: 70, marginRight: 10, borderRadius: 35 },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.MEDIUM,
  },
});
