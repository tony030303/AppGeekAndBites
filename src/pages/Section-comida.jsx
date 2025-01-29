import { StyleSheet } from "react-native";
import React from "react";
import MenuCard from "../components/MenuCard";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ImageBackground } from "expo-image";
import { useFonts } from "expo-font";

const wallpaper = require("../assets/wallPaper/NeonRoad-02.gif");

const Comida = () => {
  const [fontLoad] = useFonts({
    comic: require("../assets/fonts/Rethogen Atomics.otf"),
  });

  if (!fontLoad) {
    return null; // O un indicador de carga
  }

  return (
    <GestureHandlerRootView>
      <ImageBackground
        source={wallpaper}
        style={style.background}
        contentFit="cover"
      >
        {/**CONTENEDOR DESPLAZABLE */}
        {/* MENU */}
        <MenuCard />
      </ImageBackground>
    </GestureHandlerRootView>
  );
};

export default Comida;

const style = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
