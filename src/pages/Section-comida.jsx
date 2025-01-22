import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MenuCard from "../components/MenuCard";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { ImageBackground } from "expo-image";

const wallpaper = require("../assets/wallPaper/NeonRoad-02.gif");

const Comida = () => {
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
