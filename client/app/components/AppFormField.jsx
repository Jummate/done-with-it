import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "./app-textinput/AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, ...otherProps }) {
  const { touched, errors, setFieldTouched, handleChange } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />

      <ErrorMessage
        error={errors[name]}
        visible={touched[name]}
      />
    </>
  );
}

export default AppFormField;
