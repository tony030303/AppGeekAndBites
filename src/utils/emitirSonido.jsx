import { Audio } from "expo-av";

// Función para reproducir un sonido
export const playSound = async (sfx) => {
  let sound = null; // Variable para almacenar la instancia del sonido

  try {
    // Cargar y reproducir el sonido
    const { sound: soundInstance } = await Audio.Sound.createAsync(sfx);
    sound = soundInstance; // Almacenar la instancia del sonido
    await sound.playAsync();

    // Limpiar el sonido cuando termine de reproducirse
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        sound.unloadAsync(); // Descargar de memoria cuando termina
      }
    });
  } catch (error) {
    console.error("error de carga de sonido", error);
    sound.unloadAsync(); // Limpiar el sonido en caso de error
  }
};
