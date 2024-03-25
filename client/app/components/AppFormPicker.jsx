import React from "react";
import {} from "react-native";
import { useFormikContext } from "formik";

import AppPicker from "./app-picker/AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ items, name, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        item={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage
        error={errors[name]}
        visible={touched[name]}
      />
    </>
  );
}

export default AppFormPicker;