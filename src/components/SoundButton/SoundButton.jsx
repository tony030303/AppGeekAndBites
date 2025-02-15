import React, { useRef } from "react";
import { Text, TouchableOpacity as Button } from "react-native";
import { Audio } from "expo-av";
import { styles } from "./SoundButton.styles";
import sfx_button from "../../assets/sounds/sfx-button.mp3";

const SoundButton = ({
  title = "Presiona",
  sfx = sfx_button,
  onPress,
  style,
  textStyle,
}) => {
  const soundRef = useRef(null); // Referencia para almacenar el sonido

  // Función para reproducir el sonido
  const playSound = async () => {
    if (sfx) {
      const { sound } = await Audio.Sound.createAsync(sfx);
      soundRef.current = sound; // Almacenar el sonido en la referencia
      await sound.playAsync();
      // Esperar a que termine
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          sound.unloadAsync(); // Descargar de memoria cuando termina
        }
      });
    }
  };

  return (
    <Button
      style={[styles.button, style]}
      onPress={async () => {
        await playSound();
        if (onPress) onPress();
      }}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Button>
  );
};

export default SoundButton;
