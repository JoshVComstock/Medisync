import { Image, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import ButtonComponent from "../../../components/ui/button";
import Input from "../../../components/ui/input";
import { SVGBacgraund } from "../../../components/svg/backgaund";
import colors from "../../../components/ui/colors";
import { ROUTES } from "../../../components/enum/routes";
const Mama = require("../../../components/svg/mama.png");

const Register = () => {
  const [dataIngreso, setDataIngreso] = useState({
    ci: "",
    cartilla: "",
  });
  const ingresar = () => {
    router.push(ROUTES.RESULTADOS);
  };
  const handleInputChange = (name: string, value: string) => {
    setDataIngreso((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <SVGBacgraund style={styles.backgaund} />
      <View style={styles.content}>
        <Image style={styles.image} source={Mama} />
        <View style={styles.form}>
          <Input
            label="Ingresa el numero de CI"
            value={dataIngreso.ci}
            onChange={(text) => handleInputChange("ci", text)}
            placeholder="-----"
            type="numeric"
          />
          <Input
            label="Ingresa el numero de la cartilla"
            value={dataIngreso.cartilla}
            onChange={(text) => handleInputChange("cartilla", text)}
            placeholder="N# cartilla"
            type="numeric"
          />
          <ButtonComponent text="Ingresar" onpress={ingresar} />
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 32,
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
  },
  form: {
    backgroundColor: colors.background,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "#0002",
    borderRadius: 16,
  },
  content: {
    width: "80%",
    marginTop: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  backgaund: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  image: {
    position: "relative",
    width: 300,
    height: 300,
    resizeMode: "contain",
    bottom: -30,
  },
  text: {
    color: "#b58df1",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
