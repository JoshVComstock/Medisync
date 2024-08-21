import { Image, StyleSheet, View, ActivityIndicator, Text } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import ButtonComponent from "../../../components/ui/button";
import Input from "../../../components/ui/input";
import { SVGBacgraund } from "../../../components/svg/backgaund";
import colors from "../../../components/ui/colors";
import { ROUTES } from "../../../components/enum/routes";
import { fetchData } from "../../../services/fetch";
import SvgMama from "../../../components/svg/mama";
import useUserContext from "../../../context/userContext";
const Logo = require("../../../assets/logo.png");

const Register = () => {
  const [dataIngreso, setDataIngreso] = useState({
    ci: "",
    cartilla: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setUser } = useUserContext();

  const ingresar = () => {
    router.push(ROUTES.RESULTADOS);
  };

  const handleInputChange = (name: string, value: string) => {
    setDataIngreso((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFetch = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchData({
        url: "api/consulta",
        contenido: JSON.stringify(dataIngreso),
        token: "Token",
        metodo: "POST",
      });

      if (response.data) {
        setUser(response.data.id);
        ingresar();
      } else {
        setError(response.message || "Unexpected error occurred");
      }
    } catch (err) {
      setError("Error en la solicitud");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <SVGBacgraund style={styles.backgaund} />
      <View style={styles.content}>
        <Image style={styles.image} source={Logo} />
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
          <ButtonComponent text="Ingresar" onpress={handleFetch} />
          {loading && <ActivityIndicator size="large" color={colors.primary} />}
          {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
        <SvgMama style={styles.image} />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
  },
  form: {
    backgroundColor: colors.acent,
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
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  text: {
    color: "#b58df1",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
});
