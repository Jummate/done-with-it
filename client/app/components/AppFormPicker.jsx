import React from "react";
import {} from "react-native";
import { useFormikContext } from "formik";

import AppPicker from "./app-picker/AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ items, name, placeholder, width }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage
        error={errors[name]}
        visible={touched[name]}
      />
    </>
  );
}

export default AppFormPicker;
