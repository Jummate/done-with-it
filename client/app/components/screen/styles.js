import { StyleSheet, Platform, StatusBar } from "react-native";

//The Constant variable from expo-constants can also be used in place of StatusBar and Platform to fix SafeAreaMode issue in android

//To do this, npm install expo-constants
//import Constants from expo-constants
// then, use it this way paddingTop: Constants.statusBarHeight,

export const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    // backgroundColor: "red",
  },
  view: {
    flex: 1,
  },
});
