import { Platform, StyleSheet } from "react-native";
import { colors } from "../../shared/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLUE,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  //   loginButton: {
  //     width: "100%",
  //     height: 70,
  //     backgroundColor: colors.PRIMARY,
  //   },
  //   registerButton: {
  //     width: "100%",
  //     height: 70,
  //     backgroundColor: colors.SECONDARY,
  //   },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  tagLine: {
    fontWeight: "600",
    fontSize: 20,
    paddingVertical: 20,
  },
});
