import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

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

// Estilos
const styles = StyleSheet.create({
  container: {
    overflow: "hidden", // Evita que el contenido se desborde
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 10,
  },
  text: {
    fontFamily: "monospace", // Fuente monoespaciada para mejor legibilidad
  },
});

export default Ventana;
