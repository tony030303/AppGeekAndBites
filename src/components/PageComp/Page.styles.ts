import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

const SIZE = width * 0.95;

export const styles = StyleSheet.create({
  pageContainer: {
    width,
    height,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  square: {
    //funciona como un contenedor para la imagen
    height: SIZE,
    width: SIZE,
    //backgroundColor: "rgba(0,0,256,0.4)",
  },
  text: {
    fontSize: 60,
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
