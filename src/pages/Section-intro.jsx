// Librerias
import React, { useEffect, useState } from 'react';
import { Text, Image, View } from 'react-native';
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
  const [animation, setAni] = useState(false);

  useEffect(() => {
    setData(Data);
    setCredi(Credi);
  }, []
);


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
          )
        )
      ) : (
        <Text>Cargando datos...</Text>
      )}

      <Text style={style.text}>App elaborada por:</Text>
          


      <View style={style.containerCredito}>

        {credi && credi.length > 0 ? (
          credi.map((item, index) => (
              
            <View key={index} style={style.itemContainerCredito}>
                <Image source={images[item.creditos.img.src]} style={style.imageCredito} />
                <Text style={style.nameCredito}>{item.creditos.p.nombre}</Text>
            </View>
          )
          )
        ) : (
          <Text>Cargando datos...</Text>
        )}
      
      </View>
    </ScrollView>
      </ImageBackground>
    </>
  );
}

