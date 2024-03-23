import React from "react";
import { StyleSheet } from "react-native";
import AppText from "./app-text/AppText";

function ErrorMessage({ error, visible }) {
  return error | visible ? (
    <AppText style={styles.text}>{error}</AppText>
  ) : null;
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});

export default ErrorMessage;
