import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import WelcomeScreen from "./app/screens/welcome/WelcomeScreen";
// import ViewImageScreen from "./app/screens/view-image/ViewImageScreen";
// import ListingDetailsScreen from "./app/screens/listing-image/ListingDetailsScreen";
import MessagesScreen from "./app/screens/messages/MessagesScreen";

export default function App() {
  return (
    // <ListingDetailsScreen />
    // <WelcomeScreen />
    // <ViewImageScreen />
    <MessagesScreen />
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
