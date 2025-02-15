import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

const SIZE = width * 0.95;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContainer: {
    width,
    height,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  perkContainer: {
    //funciona como un contenedor para la imagen de la lata
    height: SIZE,
    width: SIZE,
    //backgroundColor: "rgba(0,0,256,0.4)",
  },
  text: {
    fontSize: 40,
    textAlign: "center",
    margin: 10,
    backgroundColor: "red",
    marginBottom: 20,
    color: "white",
    textTransform: "uppercase",
    fontWeight: "700",
  },
  image: {
    height: SIZE,
    width: SIZE,
    resizeMode: "contain",
  },
});

export default styles;
