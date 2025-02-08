import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Credenciales from "./Credenciales.json";
import Controlador from "./Controlador";
import { Audio } from "expo-av";
import { ImageBackground } from "expo-image";
import { Ionicons } from "@expo/vector-icons";

const wallpaper = require("../../assets/admin/matrix.gif");

function Control() {
  const [nombre, setNombre] = useState("");
  const [codigo, setCodigo] = useState("");
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(true);
  const [sonido, setSonido] = useState(null);
  const [loading, setLoading] = useState(false);

  // Función para cargar y reproducir sonidos
  const cargarYReproducirSonido = async (nombre) => {
    let usuarioAudio;
    switch (nombre) {
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
        return;
    }

    try {
      const { sound } = await Audio.Sound.createAsync(usuarioAudio);
      setSonido(sound);
      await sound.playAsync();
    } catch (error) {
      console.error("Error al reproducir el sonido:", error);
    }
  };

  // Limpieza del sonido al desmontar el componente
  useEffect(() => {
    return () => {
      if (sonido) {
        sonido.unloadAsync();
      }
    };
  }, [sonido]);

  // Verificación de credenciales
  const verificarCredencial = async () => {
    if (loading) return; // Evitar múltiples clics
    setLoading(true);

    const usuario = Credenciales.find((admin) => admin.nombre === nombre);

    if (usuario && usuario.codigo === codigo) {
      setError(false);
      setModal(false);
      await cargarYReproducirSonido(nombre);
    } else {
      setNombre("");
      setCodigo("");
      setError(true);
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      {modal ? (
        <ImageBackground
          source={wallpaper}
          style={styles.background}
          contentFit="cover"
        >
          <Text style={styles.texto}>
            Esta sección solo funciona con las credenciales de los
            administradores.
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setNombre}
            value={nombre}
            placeholder="Nombre"
            placeholderTextColor={"rgb(81, 255, 0)"}
          />
          <TextInput
            style={styles.input}
            onChangeText={setCodigo}
            value={codigo}
            placeholder="Código"
            placeholderTextColor={"rgb(81, 255, 0)"}
            secureTextEntry
          />
          {loading ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            <CustomButton
              title="Ingresar"
              onPress={verificarCredencial}
              disabled={loading}
              color={"rgb(94, 255, 0)"}
            />
          )}
          {error && (
            <Text style={styles.error}>⚠️ Credenciales Incorrectas</Text>
          )}
        </ImageBackground>
      ) : (
        <Controlador />
      )}
    </View>
  );
}

const CustomButton = ({ title, onPress, color }) => {
  const styles = StyleSheet.create({
    glowingContainer: {
      width: 300,
      padding: 20, // Más espacio para la sombra
      borderRadius: 50, // Redondeado para un glow más visible

      // 💡 Ajustando el brillo extremo
      shadowColor: "rgb(255, 0, 0)", // Color rojo fuerte
      shadowOffset: { width: 0, height: 0 }, // Sin desplazamiento
      shadowOpacity: 1, // 🔥 Intensidad total
      shadowRadius: 50, // 🔥🔥🔥 Hace el glow más grande
      elevation: 50, // En Android, aumenta la sombra
    },

    button: {
      backgroundColor: "black",
      padding: 15,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
    },

    text: {
      fontSize: 16,
      fontWeight: "bold",
    },
  });
  return (
    <TouchableOpacity onPress={onPress} style={[styles.glowingContainer]}>
      <View style={styles.button}>
        <Ionicons name="arrow-up-circle" size={24} color={color} />
        <Text style={[styles.text, { color }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Estilos centralizados con StyleSheet
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "black",
  },
  container: {
    flex: 1,
  },
  texto: {
    marginBottom: 20,
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
    color: "rgb(255, 255, 255)",
    backgroundColor: "black",
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "rgb(255, 255, 255)",
    borderWidth: 0.5,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "rgb(0, 0, 0)",
    color: "rgb(94, 255, 0)",
  },
  error: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
    backgroundColor: "rgb(0, 0, 0)",
  },
});

export default Control;
