import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../../../../components/ui/colors";
import Animated from "react-native-reanimated";

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
          borderColor: color ? color : "#0002",
          height: height,
          // backgroundColor: height ? color : "",
        },
      ]}
    >
      <Text style={styles.header}>{title}</Text>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 4,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SeccionesReport;
