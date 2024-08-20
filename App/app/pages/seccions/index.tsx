import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import Cards from "../../../components/ui/cards";
import { router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../../../components/ui/colors";
import { cards } from "./secciones";

const Secciones = () => {
  const navigate = (path: string): void => {
    router.push(path);
  };

  const renderItem = ({ item }: { item: (typeof cards)[0] }) => (
    <Cards
      text={item.name}
      onpress={() => navigate(item.path)}
      icon={<FontAwesome name={item.icon} size={32} color={colors.primary} />}
    />
  );

  return (
    <View style={styles.contain}>
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={2} 
        columnWrapperStyle={styles.row} 
        contentContainerStyle={styles.list} 
      />
    </View>
  );
};

export default Secciones;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 16,
  },
  row: {
    justifyContent: "space-between", 
    marginBottom: 16, 
  },
  list: {
    flexGrow: 1,
  },
});
