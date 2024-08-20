import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import React from "react";
import data from "../../../../data/paciente.json";
import ResultItem from "./result";
import { ResultadosLaboratorio } from "./interface";

const Report = () => {
  const results: ResultadosLaboratorio[] = data as ResultadosLaboratorio[];

  return (
    <ScrollView style={styles.container}>
      {results.map((item, index) => (
        <ResultItem item={item} key={index} />
      ))}
    </ScrollView>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 8,
  },
});
