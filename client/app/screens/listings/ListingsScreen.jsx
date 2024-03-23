import React from "react";
import { FlatList } from "react-native";

import { styles } from "./styles";
import Screen from "../../components/screen/Screen";
import Card from "../../components/card/Card";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 200,
    image: "https://picsum.photos/id/85/367/267",
  },
  {
    id: 2,
    title: "Cars in a mint condition",
    price: 400,
    image: "https://picsum.photos/id/88/367/267",
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"N" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

export default ListingsScreen;
