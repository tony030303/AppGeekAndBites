import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    borderWidth: 0, // Ancho del borde
    borderColor: "black", // Color del borde (puedes cambiarlo desde afuera)
    borderRadius: 8, // Bordes redondeados
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
