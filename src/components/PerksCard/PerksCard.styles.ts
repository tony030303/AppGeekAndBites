import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

const SIZE = width * 0.95;

const perksCardstyles = StyleSheet.create({
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
  image: {
    height: SIZE,
    width: SIZE,
    resizeMode: "contain",
  },
});

export default perksCardstyles;
