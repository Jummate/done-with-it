import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "../../shared/colors";
import AppText from "../app-text/AppText";
import PickerItem from "../pickeritem/PickerItem";

function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.MEDIUM}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.MEDIUM}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        visible={showModal}
        animationType="slide"
      >
        <Button
          title="Close"
          onPress={() => setShowModal(false)}
        />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                setShowModal(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

export default AppPicker;
