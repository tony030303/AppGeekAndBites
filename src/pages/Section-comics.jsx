import { StyleSheet, View, Text } from "react-native";
import { ImageBackground } from "expo-image";
import ComicsList from "../components/ComicsList";
import { useEffect, useState } from "react";
import evento_comic from "../events/evento_comic";
//contexto

const wallpaper = require("../assets/wallPaper/NeonRoad-03.gif");

export default function Comics() {
  const [key, setKey] = useState(1);

  useEffect(() => {
    // Guardar la función de listener
    const listener = () => {
      setKey((prevKey) => -prevKey); // Usa una función de actualización segura
      console.log("reiniciar ComicList");
    };

    // Suscribirse al evento
    evento_comic.addListener("comicModificado", listener);

    // Limpiar la suscripción al desmontar el componente
    return () => {
      evento_comic.removeListener("comicModificado", listener);
    };
  }, []); // No depende de `key` porque no necesitamos recrear la suscripción

  return (
    <>
      <ImageBackground
        source={wallpaper}
        style={style.background}
        contentFit="cover"
      >
        {/*contenedor principal para el contenido sobre la imagen de fondo */}
        <View key={key} style={style.container}>
          <Text style={style.heading}>Sección de Cómics</Text>
          <ComicsList />
        </View>
      </ImageBackground>
    </>
  );
}

const style = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1, //permite que el contenedor crezca segun el contenido
    padding: 20,
    alignItems: "center",
  },
  sectionContainer: {
    flex: 1, //ocupa todo el espacio disponible
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent", // Asegura que sea transparente
  },
  text: {
    fontSize: 24,
    color: "#fff", // Asegura que el texto sea visible sobre el fondo
    fontFamily: "monospace",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingTop: 30,
    borderRadius: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    color: "#fff",
    fontFamily: "monospace",
  },
});
