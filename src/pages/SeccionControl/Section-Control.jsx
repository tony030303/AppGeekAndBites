import { useState } from "react";
import { Text, TextInput, Button, View } from "react-native";
import Credenciales from "./Credenciales.json";
import Controlador from "./Controlador";
import { Audio } from "expo-av";

function Control() {
  const [nombre, setNombre] = useState("");
  const [codigo, setCodigo] = useState("");
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(true);

  const verificarCredencial = async () => {
    // Buscar en el array un usuario con el nombre ingresado
    const usuario = Credenciales.find((admin) => admin.nombre === nombre);

    if (usuario && usuario.codigo === codigo) {
      setError(false);
      setModal(false);
      await playSound(usuario.nombre);
    } else {
      setNombre("");
      setCodigo("");
      setError(true);
    }
  };

  const playSound = async (usuario) => {
    try {
      let usuarioAudio;
      switch (usuario) {
        case "Facundo":
          usuarioAudio = require("../../assets/sounds/facundo.mp3");
          break;
        case "Antonio":
          usuarioAudio = require("../../assets/sounds/antonio.mp3");
          break;
        case "Albany":
          usuarioAudio = require("../../assets/sounds/albany.mp3");
          break;
        case "Sthefany":
          usuarioAudio = require("../../assets/sounds/sthefany.mp3");
          break;
        default:
          usuarioAudio = null;
      }

      const { sound: userSound } = await Audio.Sound.createAsync(usuarioAudio);
      await userSound.playAsync();
    } catch (error) {
      console.error("Error al reproducir el audio:", error);
    }
  };

  return (
    <View>
      {modal && (
        <>
          <Text>
            Esta sección solo funciona con las credenciales de los
            administradores.
          </Text>
          <TextInput
            onChangeText={setNombre}
            value={nombre}
            placeholder="Nombre"
          />
          <TextInput
            onChangeText={setCodigo}
            value={codigo}
            placeholder="Código"
            secureTextEntry
          />
          <Button title="Ingresar" onPress={verificarCredencial} />
          {error && <Text>⚠️ Credenciales Incorrectas</Text>}
        </>
      )}

      {!modal && <Controlador />}
    </View>
  );
}

export default Control;
