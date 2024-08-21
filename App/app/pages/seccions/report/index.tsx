import { View, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import ResultItem from "./result";
import useUserContext from "../../../../context/userContext";
import { fetchData } from "../../../../services/fetch";
const Report = () => {
  const [datareport, setDatareport] = useState([]);
  const { userid } = useUserContext();
  const id = userid;
  const getFetch = async () => {
    try {
      const fetch = await fetchData({
        url: `api/consulta/${id}`,
        contenido: JSON.stringify(datareport),
        token: "Token",
        metodo: "GET",
      });

      if (fetch.data) {
        console.log("Se obtuvo los valores");
        setDatareport(fetch.data);
      }
    } catch (error) {
      console.log("ocurrio un error");
    }
  };

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <View style={{ width: "100%", height: "90%" }}>
      <ScrollView style={styles.container}>
        {datareport.map((item, index) => (
          <ResultItem item={item} key={index} />
        ))}
      </ScrollView>
    </View>
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
