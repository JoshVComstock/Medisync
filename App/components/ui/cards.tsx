import { Text, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import colors from "./colors";
interface propsCard {
  text: string;
  onpress: () => void;
  icon: React.ReactNode;
}
const Cards = ({ text, onpress, icon }: propsCard) => {
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
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Cards;

const styles = StyleSheet.create({
  button: {
    width: "48%",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    backgroundColor: colors.acent,
  },
  text: {
    color: colors.primary,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
  },
  icon: {
    fontSize: 32,
  },
});
