import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ImageBackground } from 'expo-image';
// Componentes
import Filimina from '../components/Filimina';

const Fondo = require('../assets/neonRoad.gif');
const Imagen1 = require('../assets/01-index-kids-eating.jpeg')
const wallpaper = require('../assets/wallPaper/NeonRoad-02.gif')
import Data from '../jsons/indexContent.json';
import Credito from '../jsons/creditos.json';


export default function Comida() {
    

  return (
<>
   <ImageBackground
      source={wallpaper}
      style={style.background}
      contentFit="cover"
    >
   <ScrollView contentContainerStyle={style.scrollContainer}>

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