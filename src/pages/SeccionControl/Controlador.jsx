import React, { useState } from "react";
import { View, Button, Vibration, StyleSheet } from "react-native";
import { Audio } from "expo-av";

import ABMComic from "./ABM/Comic/InterfazComic";
import ABMComida from "./ABM/Comida/InterfazComida";

function Controlador() {
  const [verComida, setVerComida] = useState(false);
  const [verComic, setVerComic] = useState(false);
  const [verCancelar, setVerCancelar] = useState(false);

  // Función para reproducir sonidos
  const playSound = async (usuario) => {
    try {
      // Reproducir sonido de bienvenida
      const { sound: welcome } = await Audio.Sound.createAsync(
        require("../../assets/sounds/welcome.mp3"),
      );
      await welcome.playAsync();

      // Reproducir sonido específico del usuario
      let usuarioAudio;
      switch (usuario) {
        case "Facundo":
          usuarioAudio = require("../../assets/sounds/facundo.mp3");
          break;
        case "Toni":
          usuarioAudio = require("../../assets/sounds/antonio.mp3");
          break;
        case "Albany":
          usuarioAudio = require("../../assets/sounds/albany.mp3");
          break;
        case "Sthefy":
          usuarioAudio = require("../../assets/sounds/sthefany.mp3");
          break;
        default:
          usuarioAudio = null;
      }

      if (usuarioAudio) {
        const { sound: userSound } =
          await Audio.Sound.createAsync(usuarioAudio);
        await userSound.playAsync();
        userSound.unloadAsync();
      }

      welcome.unloadAsync(); // Liberar el sonido de bienvenida
    } catch (error) {
      console.error("Error al reproducir el audio:", error);
    }
  };

  // Funciones para abrir y cerrar las interfaces
  const abrirABMComida = () => {
    setVerComida(true);
    setVerCancelar(true);
    playSound("Facundo");
  };

  const abrirABMComic = () => {
    setVerComic(true);
    setVerCancelar(true);
  };

  const cancelar = () => {
    setVerCancelar(false);
    setVerComida(false);
    setVerComic(false);
    Vibration.vibrate(20); // Vibración al cancelar
  };

  return (
    <View style={styles.container}>
      {/* Botón de cancelar (condicional) */}
      {verCancelar && (
        <CustomButton title="Cancelar" onPress={cancelar} color="#ff4444" />
      )}

      {/* Botones principales (condicional) */}
      {!verCancelar && (
        <>
          <CustomButton
            title="ABM COMIDAS"
            onPress={abrirABMComida}
            color="#6200ee"
          />
          <CustomButton
            title="ABM COMICS"
            onPress={abrirABMComic}
            color="rgb(0,0,0)"
          />
        </>
      )}

      {/* Interfaces ABM (condicionales) */}
      {verComida && <ABMComida />}
      {verComic && <ABMComic />}
    </View>
  );
}

// Componente reutilizable para botones
const CustomButton = ({ title, onPress, color }) => (
  <View style={styles.buttonContainer}>
    <Button title={title} onPress={onPress} color={color} />
  </View>
);

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgb(0,0,0)",
  },
  buttonContainer: {
    marginVertical: 10,
    width: "80%",
    borderColor: "rgb(0, 255, 0)",
    color: "black",
  },
});

export default Controlador;
