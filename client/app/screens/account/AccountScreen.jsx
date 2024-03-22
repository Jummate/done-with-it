import React from "react";
import { View, FlatList } from "react-native";

import Screen from "../../components/screen/Screen";
import Icon from "../../components/icon/Icon";
import { styles } from "./styles";
import ListItem from "../../components/list-item/ListItem";
import { colors } from "../../shared/colors";
import ListItemSeparator from "../../components/list-item-separator/ListItemSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      bgColor: colors.PRIMARY,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      bgColor: colors.SECONDARY,
    },
  },
];
function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Omololu Jumat"
          subTitle="omololu.jumat@gmail.com"
          image="https://picsum.photos/id/75/367/267"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  bgColor={item.icon.bgColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={<ListItemSeparator />}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Log Out"
          IconComponent={
            <Icon
              name="logout"
              bgColor="#ffe66d"
            />
          }
        />
      </View>
    </Screen>
  );
}

export default AccountScreen;
