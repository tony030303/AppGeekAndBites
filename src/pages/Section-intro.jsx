import React, { useEffect, useState } from "react";
import { Text, Image, View, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ImageBackground } from "expo-image";
import style from "../styles/style-intro";

// Componentes
import Filimina from "../components/utils/Filimina";
import Rotador from "../components/utils/Rotador";
import RotarPressable from "../components/utils/TouchRotador";

// Jsons
import Data from "../jsons/indexContent.json";
import Credi from "../jsons/creditos.json";

// Galeria
const images = require("./intro-requires");
const wallpaper = require("../assets/wallPaper/NeonRoad-01.gif");
const logo = require("../assets/01-logo.jpeg");

export default function Intro() {
  const [data, setData] = useState([]);
  const [credi, setCredi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setData(Data);
      setCredi(Credi);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error al cargar los datos.</Text>;

  return (
    <ImageBackground
      source={wallpaper}
      style={style.background}
      contentFit="cover"
    >
      <ScrollView contentContainerStyle={style.scrollContainer}>
        <Text style={style.text}>Bienvenidos a Gekks & Bites!</Text>
        <Rotador>
          <Image source={logo} style={style.img} />
        </Rotador>

        {data.map((item, index) => (
          <Filimina key={index} imagen={images[item.contenido.img.src]}>
            {item.contenido.p.descripcion}
          </Filimina>
        ))}

        <Text style={style.text}>App elaborada por:</Text>

        <View style={style.containerCredito}>
          {credi.map((item, index) => (
            <View key={index} style={style.itemContainerCredito}>
              <RotarPressable>
                <Image
                  source={images[item.creditos.img.src]}
                  style={style.imageCredito}
                />
              </RotarPressable>
              <Text style={style.nameCredito}>{item.creditos.p.nombre}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
