import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  card: {
    marginBottom: 20, // espaciado inferior entre tarjetas
    alignItems: "center",
    backgroundColor: "#309dfb",
    borderRadius: 8,
    padding: 7, // espaciado interno
  },
  image: {
    width: 150,
    height: 220,
    resizeMode: "cover", // hace que la imagen conserve su relación de aspecto y llena el contenedor
    borderRadius: 8,
  },
  title: {
    marginTop: 10, // espacio superior entre la imagen y el título
    fontSize: 9.5,
    fontWeight: "bold",
    color: "#ffffff",
    fontFamily: "monospace",
  },
  year: {
    fontSize: 9,
    fontWeight: "bold",
    fontFamily: "monospace",
    color: "#ffffff",
  },
});
