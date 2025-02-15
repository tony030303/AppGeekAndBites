import { StyleSheet } from "react-native";

// Estilos
export const styles = StyleSheet.create({
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
