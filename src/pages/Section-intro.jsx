import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ImageBackground } from 'expo-image';

// Componentes
import Filimina from '../components/Filimina';

// Galeria
import * as images from './intro-requires';

const Imagen1 = require('../assets/01-index-kids-eating.jpeg');
const wallpaper = require('../assets/wallPaper/NeonRoad-01.gif');

import Data from '../jsons/indexContent.json';
import Credi from '../jsons/creditos.json';

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
        {/* Condición para asegurarse de que los datos están cargados */}
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <Filimina key={index} imagen={images[item.contenido.img.src]}>
              {item.contenido.p.descripcion}
            </Filimina>
          ))
        ) : (
          <Text>Cargando datos...</Text>
        )}
        {/* Puedes agregar contenido aquí si lo necesitas */}
      </ScrollView>
      </ImageBackground>
    </>
  );
}

const style = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center', // Centra el contenido horizontalmente
  },
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Asegura que sea transparente
  },
  text: {
    fontSize: 24,
    color: 'black', // Asegura que el texto sea visible sobre el fondo
    fontFamily: 'comic',
  },
});
