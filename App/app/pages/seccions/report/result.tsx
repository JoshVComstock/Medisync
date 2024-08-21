import React, { useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { ResultadosLaboratorio } from "./interface";
import colors from "../../../../components/ui/colors";
import SeccionesReport from "./seccionesReport";
import { FontAwesome } from "@expo/vector-icons";
import { useSharedValue, withSpring } from "react-native-reanimated";

interface ResultItemProps {
  item: ResultadosLaboratorio;
  colorContainer?: boolean;
}

const ResultItem = ({ item }: ResultItemProps) => {
  const [visible, setVisible] = useState(false);

  const colorRender = (resultado: string) => {
    switch (resultado) {
      case "positivo":
        return colors.positivo;
      case "sospechoso":
        return colors.tercery;
      default:
        return colors.negativo;
    }
  };

  const height = useSharedValue(120);

  const handlePress = () => {
    setVisible(!visible);
    height.value = withSpring(visible ? 120 : 480);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
        },
        styles.itemContainer,
      ]}
    >
      <SeccionesReport
        title="RESULTADOS DEL LABORATORIO"
        color={colorRender(item.resultado)}
        height={height}
      >
        <Text>
          <Text style={styles.label}>Fecha:</Text>
          {new Date(item.fechaResultado).toLocaleDateString()}
        </Text>
        <Text style={{ color: colorRender(item.resultado) }}>
          <Text style={styles.label}>Resultado:</Text> {item.resultado} {""}
          <FontAwesome
            name="circle"
            size={15}
            color={colorRender(item.resultado)}
          />
        </Text>
        <Text>
          <Text style={styles.label}>Observaciones:</Text> {item.observaciones}
        </Text>
        {visible && (
          <React.Fragment>
            <SeccionesReport title="DATOS DE LA CARTILLA">
              <Text>
                <Text style={styles.label}>Código de Barras:</Text>
                {item.cartillaRelacion.codigoBarras}
              </Text>
              <Text>
                <Text style={styles.label}>Número de Muestra:</Text>
                {item.cartillaRelacion.numeroMuestra}
              </Text>
            </SeccionesReport>
            <SeccionesReport title="DATOS DEL PACIENTE">
              <Text>
                <Text style={styles.label}>Nombre:</Text>
                {item.pacienteRelacion.nombrePaciente}
              </Text>
              <Text>
                <Text style={styles.label}>Edad Gestacional:</Text>
                {item.pacienteRelacion.edadGestional.join(" semanas, ")} días
              </Text>
              <Text>
                <Text style={styles.label}>Fecha de Nacimiento:</Text>
                {new Date(
                  item.pacienteRelacion.fechaNacimiento
                ).toLocaleDateString()}
              </Text>
              <Text>
                <Text style={styles.label}>Peso al Nacer:</Text>
                {item.pacienteRelacion.pesoNacimiento} g
              </Text>
            </SeccionesReport>
            <SeccionesReport title="DATOS DE LA MADRE">
              <Text>
                <Text style={styles.label}>Nombre:</Text>
                {item.madreRelacion.nombreMadre}
              </Text>
              <Text>
                <Text style={styles.label}>Teléfono:</Text>
                {item.madreRelacion.telefono.join(", ")}
              </Text>
            </SeccionesReport>
          </React.Fragment>
        )}
      </SeccionesReport>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 2,
    padding: 8,
    flexDirection: "column",
    gap: 2,
  },
  label: {
    fontWeight: "bold",
    // color:colors.textLite
  },
});

export default ResultItem;
