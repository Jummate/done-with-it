import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/welcome/WelcomeScreen";
// import ViewImageScreen from "./app/screens/view-image/ViewImageScreen";

export default function App() {
  return (
    <WelcomeScreen />
    // <ViewImageScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
});
