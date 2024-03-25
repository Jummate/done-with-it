import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import WelcomeScreen from "./app/screens/welcome/WelcomeScreen";
// import ViewImageScreen from "./app/screens/view-image/ViewImageScreen";
// import ListingDetailsScreen from "./app/screens/listing-image/ListingDetailsScreen";
// import MessagesScreen from "./app/screens/messages/MessagesScreen";
// import AccountScreen from "./app/screens/account/AccountScreen";
import Icon from "./app/components/icon/Icon";
import ListItem from "./app/components/list-item/ListItem";
import Screen from "./app/components/screen/Screen";
import ListingsScreen from "./app/screens/listings/ListingsScreen";
import AppTextInput from "./app/components/app-textinput/AppTextInput";
import AppPicker from "./app/components/app-picker/AppPicker";
import LoginScreen from "./app/screens/login/LoginScreen";
import ListingEditScreen from "./app/screens/listing-edit/ListingEditScreen";

// <ListingDetailsScreen />
// <WelcomeScreen />
// <ViewImageScreen />
// <MessagesScreen />
// <Screen>
{
  /* <ListItem
        title="My title"
        subTitle="My SubTitle"
        IconComponent={<Icon name="email" />}
      /> */
}
{
  /* <Icon
        name="email"
        size={50}
        bgColor="red"
        iconColor="white"
      /> */
}
// </Screen>

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothings", value: 2 },
  { label: "Applicances", value: 3 },
];

export default function App() {
  return <ListingEditScreen />;
  // return <AccountScreen />;
  // return <ListingsScreen />;

  // const [category, setCategory] = useState();
  // return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
});
