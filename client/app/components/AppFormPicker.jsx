import React from "react";
import {} from "react-native";
import { useFormikContext } from "formik";

import AppPicker from "./app-picker/AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
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
