import { StyleSheet, Dimensions } from "react-native";

const styleComidas = StyleSheet.create({
  background: {
    flex: 1, // Asegura que el fondo ocupe todo el espacio disponible
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover", //cover
  },
  container: {
    //backgroundColor: "black",
    marginTop: 10,
  },
  listItem: {
    height: 200,
    width: Dimensions.get("window").width / 2 - 16,
    backgroundColor: "white",
    borderWidth: 4, // Grosor del borde
    borderColor: "purple", // Color del borde
    margin: 8,
    perspective: "1000",
    flex: 1,
    //borderRadius: 10,
  },
  detailsContainer: {
    //paddingHorizontal: 16, //TODO: Sacar
    //paddingVertical: 5, //TODO: Sacar
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    //backgroundColor: "blue", //TODO: Sacar
  },
  cardFront: {
    flex: 1,
    position: "absolute",
    height: "95%",
    width: "94%",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    backfaceVisibility: "hidden", // Oculta la parte trasera al rotar
    //transition: "transform 0.6s", // Añade transición suave
  },
  cardBackBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.75)", // Fondo semitransparente
    width: "100%",
    height: "100%",
  },
  cardBack: {
    position: "absolute",
    width: "94%",
    height: "95%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    margin: 5,
    backfaceVisibility: "hidden", // Oculta la parte trasera al rotar
    transform: [{ rotateY: "180deg" }],
    //transition: "transform 0.6s", // Añade transición suave
  },
  image: {
    height: "95%",
    margin: 5,
    //borderRadius: 10,
    //backgroundColor: "pink",
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginBottom: 150,
  },
  descripcion: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#fff",
    textAlign: "center",
  },
  text: {
    fontSize: 40,
    textAlign: "center",
    margin: 10,
    marginBottom: 20,
    color: "white",
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "comic",
  },
});

export default styleComidas;
