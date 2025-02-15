import React from "react";
import { View, ScrollView, Text } from "react-native";
import { styles } from "./Ventana.styles";

const Ventana = ({
  data,
  ancho,
  alto,
  backgroundColor = "black",
  color = "white",
  fontSize = 14,
}) => {
  // Función para formatear el JSON como texto legible
  const formatJSON = (json) => {
    return JSON.stringify(json, null, 2); // Indentación de 2 espacios
  };

  return (
    <View style={[styles.container, { width: ancho, height: alto }]}>
      <ScrollView style={styles.scrollView}>
        <View style={[styles.content, { backgroundColor }]}>
          <Text style={[styles.text, { color, fontSize }]}>
            {formatJSON(data)}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Ventana;
