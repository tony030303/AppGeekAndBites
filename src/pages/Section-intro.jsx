// Librerias
import React, { useEffect, useState } from 'react';
import { Animated, View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ImageBackground } from 'expo-image';
import style from '../styles/style-intro'

// Componentes
import Filimina from '../components/Filimina';
import Rotador from '../components/Rotador'
// Galeria
import * as images from './intro-requires';
const wallpaper = require('../assets/wallPaper/NeonRoad-01.gif');
const logo = require('../assets/01-logo.jpeg');

// Jsons
import Data from '../jsons/indexContent.json';
import Credi from '../jsons/creditos.json';


// Codigo
export default function Intro() {
  const [data, setData] = useState(null);
  const [credi, setCredi] = useState(null);

  useEffect(() => {
    setData(Data);
    setCredi(Credi);
  }, []);


  return (
    <>
      <ImageBackground
        source={wallpaper}
        style={style.background}
        contentFit="cover"
      >

      <ScrollView contentContainerStyle={style.scrollContainer}>
        <Text style={style.text}>Bienvenidos a Gekks & Bites!</Text>
        <Rotador>
          <Image source={logo} style={style.img}/>
        </Rotador>

        {data && data.length > 0 ? (
          data.map((item, index) => (
            <Filimina key={index} imagen={images[item.contenido.img.src]}>
              {item.contenido.p.descripcion}
            </Filimina>
          ))
        ) : (
          <Text>Cargando datos...</Text>
        )}
      </ScrollView>
      </ImageBackground>
    </>
  );
}

