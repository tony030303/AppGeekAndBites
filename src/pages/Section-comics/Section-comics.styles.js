import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1, //permite que el contenedor crezca segun el contenido
    padding: 20,
    alignItems: "center",
  },
  sectionContainer: {
    flex: 1, //ocupa todo el espacio disponible
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent", // Asegura que sea transparente
  },
  text: {
    fontSize: 24,
    color: "#fff", // Asegura que el texto sea visible sobre el fondo
    fontFamily: "monospace",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingTop: 30,
    borderRadius: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    color: "#fff",
    fontFamily: "monospace",
  },
});
