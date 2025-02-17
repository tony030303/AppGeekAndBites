import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
    alignItems: "center", // Centra el contenido horizontalmente
  },

  container: {
    flex: 1, //ocupa todo el espacio disponible
    padding: 20, //margen
    alignItems: "center",
    justifyContent: "center", //Centrar el contenido verticalmente
  },
});
