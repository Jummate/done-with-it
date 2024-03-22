import { FlatList } from "react-native";
import ListItem from "../../components/list-item/ListItem";
import Screen from "../../components/screen/Screen";
import { styles } from "./styles";
import ListItemSeparator from "../../components/list-item-separator/ListItemSeparator";
import ListItemDeleteAction from "../../components/listitem-delete-action/ListItemDeleteAction";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image:
      "https://fastly.picsum.photos/id/58/1280/853.jpg?hmac=YO3QnOm9TpyM5DqsJjoM4CHg8oIq4cMWLpd9ALoP908",
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image:
      "https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg",
  },
];

function MessagesScreen() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item, index }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(`item ${index} selected`)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => console.log(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

export default MessagesScreen;
