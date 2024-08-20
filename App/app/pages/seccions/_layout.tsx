import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";
import ButtonBar from "../../../components/ui/buttonBar";

export default function layout() {
  return (
    <View style={styles.contain}>
      <Slot />
      <ButtonBar />
    </View>
  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
