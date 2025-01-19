import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Menu from "../pages/Section-menu";
import comidasData from "../jsons/comidas"; //importamos el archivo de comidas
import { ImageBackground } from "expo-image";
const LIST_DATA = comidasData;
const wallpaper = require("../assets/wallPaper/NeonRoad-02.gif");

export default function Comida() {
  return (
    <SafeAreaProvider>
      <ImageBackground
        source={wallpaper}
        style={style.background}
        contentFit="cover"
      >
        <Menu />
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
