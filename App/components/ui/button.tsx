interface PropsButton {
  text: String;
  onpress: () => void;
}
import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import colors from "./colors";

const ButtonComponent = ({ text, onpress }: PropsButton) => {
  return (
    <Pressable
      onPress={() => onpress()}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.primary : "",
        },
        styles.button,
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default ButtonComponent;
const styles = StyleSheet.create({
  button: {
    padding: 8,
    paddingHorizontal: 48,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 8,
    backgroundColor: colors.acent,
  },
  text: {
    color: colors.primary,
    fontWeight: "bold",
  },
});
