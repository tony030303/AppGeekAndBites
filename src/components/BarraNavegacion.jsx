import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Image } from "expo-image";
import { StyleSheet, Vibration } from "react-native";
import { Audio } from "expo-av";
// Pages
import Intro from "../pages/Section-intro";
import Comidas from "../pages/Section-comida";
import Comics from "../pages/Section-comics";
import Contactos from "../pages/Section-contactos";
// import PruebaBackend from "../pages/pruebaSub";
import Admin from "../pages/SeccionControl/Section-Control";
import Controlador from "../pages/SeccionControl/Controlador";

const Tab = createMaterialTopTabNavigator();

export default function BarraNavegacion() {
  const Logo = require("../assets/01-logo.jpeg");
  const [showAdmin, setShowAdmin] = useState(false); // Estado para controlar la visibilidad de Admin
  const [tapCount, setTapCount] = useState(1); // Contador de toques en Intro

  console.log("Barra de Secciones Funcionando! 🔍");

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/secreto.mp3"),
    );

    // Reproducir sonido
    await sound.playAsync();

    // Esperar a que termine
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        sound.unloadAsync(); // Descargar de memoria cuando termina
      }
    });
  };

  // Función para manejar los toques en Intro
  const handleIntroPress = () => {
    Vibration.vibrate(40);
    if (!showAdmin) {
      setTapCount(tapCount + 1);
      console.log("tocado " + tapCount);

      if (tapCount === 5) {
        setShowAdmin(true); // Mostrar Admin después de 5 toques
        playSound();
        Vibration.vibrate([
          0, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        ]);
      }
    }
  };

  // Función para manejar los toques en Intro
  const wrongPress = () => {
    Vibration.vibrate(100);
    if (!showAdmin) {
      console.log("tocado incorrecto");
      setTapCount(0);
    }
  };

  return (
    <Tab.Navigator
      initialRouteName="Intro"
      screenOptions={{
        tabBarStyle: style.container,
        tabBarLabelStyle: style.buttonText,
        tabBarIndicatorStyle: { backgroundColor: "#FFFFFF" },
      }}
    >
      {/* Pantalla Intro */}
      <Tab.Screen
        name="Intro"
        component={Intro}
        listeners={{
          tabPress: () => {
            handleIntroPress(); // Llamar a la función al presionar Intro
          },
        }}
        options={{
          tabBarIcon: () => <Image source={Logo} style={style.imagen} />,
          tabBarShowLabel: false,
        }}
      />

      {/* Otras pantallas */}
      <Tab.Screen
        name="Comida"
        component={Comidas}
        listeners={{
          tabPress: () => {
            wrongPress(); // Llamar a la función al presionar Intro
          },
        }}
      />

      <Tab.Screen
        name="Comics"
        component={Comics}
        listeners={{
          tabPress: () => {
            wrongPress(); // Llamar a la función al presionar Intro
          },
        }}
      />

      <Tab.Screen
        name="Contactos"
        component={Contactos}
        listeners={{
          tabPress: () => {
            wrongPress(); // Llamar a la función al presionar Intro
          },
        }}
      />

      <Tab.Screen
        name="ABM"
        component={Controlador}
        listeners={{
          tabPress: () => {
            wrongPress(); // Llamar a la función al presionar Intro
          },
        }}
      />
      {/* <Tab.Screen name="Test" component={PruebaBackend} /> */}

      {/* Pantalla Admin (condicionalmente visible) */}
      {showAdmin && (
        <Tab.Screen
          name="Admin"
          component={Admin}
          listeners={{
            tabPress: () => {
              Vibration.vibrate(20);
            },
          }}
          options={{
            tabBarLabel: "Admin",
            tabBarLabelStyle: { ...style.buttonText, color: "red" }, // Estilo diferente para destacar
          }}
        />
      )}
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
