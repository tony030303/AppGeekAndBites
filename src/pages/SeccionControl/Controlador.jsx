import { useState } from "react";
import { View, Button, Vibration } from "react-native";
import { Audio } from "expo-av";

import ABMComic from "./ABM/Comic/InterfazComic";
import ABMComida from "./ABM/Comida/InterfazComida";

function Controlador() {
  const [verComida, setVerComida] = useState(false);
  const [verComic, setVerComic] = useState(false);
  const [verCancelar, setVerCancelar] = useState(false);
  const abrirABMComida = () => {
    setVerComida(true);
    setVerCancelar(true);
    playSound("Facundo");
  };

  const playSound = async (usuario) => {
    try {
      const { sound: welcome } = await Audio.Sound.createAsync(
        require("../../assets/sounds/welcome.mp3"),
      );
      await welcome.playAsync();
      welcome.unloadAsync();

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
        welcome.setOnPlaybackStatusUpdate(async (status) => {
          const { sound: userSound } =
            await Audio.Sound.createAsync(usuarioAudio);

          if (status.didJustFinish) {
            await userSound.playAsync();
            userSound.unloadAsync();
          }
        });
      }
    } catch (error) {
      console.error("Error al reproducir el audio:", error);
    }
  };

  const abrirABMComic = () => {
    setVerComic(true);
    setVerCancelar(true);
  };
  const cancelar = () => {
    setVerCancelar(false);
    setVerComida(false);
    setVerComic(false);
    Vibration.vibrate(20);
  };
  return (
    <View>
      {verCancelar && <Button title="Cancelar" onPress={cancelar} />}
      {!verCancelar && (
        <>
          <Button title="ABM COMIDAS" onPress={abrirABMComida} />
          <Button title="ABM COMICS" onPress={abrirABMComic} />
        </>
      )}

      {verComida && <ABMComida />}
      {verComic && <ABMComic />}
    </View>
  );
}

export default Controlador;
