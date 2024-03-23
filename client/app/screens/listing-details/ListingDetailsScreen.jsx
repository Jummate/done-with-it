import { Image, View } from "react-native";

import { styles } from "./styles";
import AppText from "../../components/app-text/AppText";
import ListItem from "../../components/list-item/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={{ uri: "https://picsum.photos/id/50/367/267" }}
      />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Brown Bird for sale</AppText>
        <AppText style={styles.price}>N6000</AppText>
        <View style={{ marginVertical: 40 }}>
          <ListItem
            title="Omololu Jumat"
            subTitle="4 Listings"
            image="https://picsum.photos/id/55/367/267"
          />
        </View>
      </View>
    </View>
  );
}

export default ListingDetailsScreen;
