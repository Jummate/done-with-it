import React from "react";
import {} from "react-native";
import * as Yup from "yup";

import { styles } from "./styles";
import Screen from "../../components/screen/Screen";
import AppForm from "../../components/AppForm";
import AppFormField from "../../components/AppFormField";
import AppFormPicker from "../../components/AppFormPicker";
import SubmitButton from "../../components/SubmitButton";
import CategoryPickerItem from "../../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Cars", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Cameras", value: 3, backgroundColor: "blue", icon: "lock" },
  { label: "Games", value: 4, backgroundColor: "orange", icon: "apps" },
  { label: "Clothing", value: 5, backgroundColor: "yellow", icon: "email" },
  { label: "Sports", value: 6, backgroundColor: "purple", icon: "lock" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "skyblue",
    icon: "apps",
  },
  { label: "Books", value: 8, backgroundColor: "maroon", icon: "email" },
  { label: "Other", value: 9, backgroundColor: "cyan", icon: "lock" },
];
function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          maxLength={255}
          name="title"
          placeholder="Title"
        />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

export default ListingEditScreen;
