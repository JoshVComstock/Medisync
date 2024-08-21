import { Text, StyleSheet } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import colors from "../../../../components/ui/colors";

interface propsSecciones {
  title: string;
  children: React.ReactNode;
  color?: string;
  height?: Animated.SharedValue<number>;
}

const SeccionesReport = ({
  title,
  children,
  color,
  height,
}: propsSecciones) => {
  return (
    <Animated.View
      style={[
        styles.itemContainer,
        {
          borderColor: "#0002",
          height: height,
        },
      ]}
    >
      <Text style={[{ color }, styles.header]}>{title}</Text>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    marginVertical: 4,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SeccionesReport;
