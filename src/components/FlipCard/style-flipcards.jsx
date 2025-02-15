import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagen: {
    justifyContent: "center", // Centra la imagen dentro del contenedor
    alignItems: "center", // Centra la imagen dentro del contenedor
    width: "100%", // Ajustar al tamaño deseado
    height: "100%", // Ajustar al tamaño deseado
    overflow: "hidden", // Para evitar que la imagen se desborde
    flex: 1,
  },
  imagenBack: {
    backgroundColor: "rgba(0, 0, 0, 0.75)", // Fondo semitransparente
  },
  cartaContenedor: {
    position: "relative",
    height: 200,
    width: Dimensions.get("window").width / 2 - 16,
    margin: 8,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    overflow: "hidden",
    marginTop: 0,
    marginBottom: 140,
    textAlign: "center",
  },
  front: {
    backgroundColor: "black",
  },
  back: {
    backgroundColor: "black",
  },
  card: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    position: "absolute",
    backfaceVisibility: "hidden",
    borderWidth: 4, // Grosor del borde
    borderColor: "purple", // Color del borde
  },
  contentText: {
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  boldText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default styles;
