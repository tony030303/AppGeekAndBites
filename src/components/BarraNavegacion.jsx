import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

// Pages
import Intro from "../pages/Section-intro";
import Comidas from "../pages/Section-comida";
import Comics from "../pages/Section-comics";
import Contactos from "../pages/Section-contactos";
import Anima from "./LaTag";

const Tab = createMaterialTopTabNavigator();

export default function BarraNavegacion() {
  const Logo = require("../assets/01-logo.jpeg");
  console.log("Barra de Secciones Funcionando! 🔍");

  return (
    <Tab.Navigator
      initialRouteName="Intro"
      screenOptions={{
        tabBarStyle: style.container,
        tabBarLabelStyle: style.buttonText,
        tabBarIndicatorStyle: { backgroundColor: "#FFFFFF" },
      }}
    >
      <Tab.Screen
        name="Intro"
        component={Intro}
        options={{
          tabBarIcon: () => <Image source={Logo} style={style.imagen} />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen name="Comida" component={Comidas} />
      <Tab.Screen name="Comics" component={Comics} />
      <Tab.Screen name="Contactos" component={Contactos} />
      <Tab.Screen name="BETATESTING" component={Anima} />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "rgb(0, 0, 0)",
  },
  imagen: {
    width: 70,
    height: 70,
    contentFit: "contain",
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 15,
    color: "#FFFFFF",
    padding: 0,
    textAlign: "center",
    fontFamily: "comic",
  },
});
