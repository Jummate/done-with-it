import { StyleSheet } from "react-native";
import { colors } from "../../shared/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.WHITE,
  },
  image: { height: 70, width: 70, borderRadius: 35 },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.MEDIUM,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
});
