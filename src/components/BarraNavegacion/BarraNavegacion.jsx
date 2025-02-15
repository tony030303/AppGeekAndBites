import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Image } from "expo-image";
import { Vibration } from "react-native";
import { Audio } from "expo-av";

//styles
import { style } from "./BarraNavegacion.styles";

// Pages
import Intro from "../../pages/Section-intro";
import Comidas from "../../pages/Section-comida";
import Comics from "../../pages/Section-comics";
import Contactos from "../../pages/Section-contactos";
// import PruebaBackend from "../pages/pruebaSub";
import Admin from "../../pages/SeccionControl/Section-Control";

const Tab = createMaterialTopTabNavigator();

export default function BarraNavegacion() {
  const Logo = require("../../assets/intro/01-logo.jpeg");
  const [showAdmin, setShowAdmin] = useState(false); // Estado para controlar la visibilidad de Admin
  const [tapCount, setTapCount] = useState(1); // Contador de toques en Intro

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/sounds/secreto.mp3"),
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
