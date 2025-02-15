import { View, Text } from "react-native";
import { ImageBackground } from "expo-image";
import ComicsList from "../../components/ComicsList/ComicsList";
import { useEffect, useState } from "react";
import evento_comic from "../../events/evento_comic";
import { style } from "./Section-comics.styles";
//contexto

const wallpaper = require("../../assets/wallPaper/NeonRoad-03.gif");

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
