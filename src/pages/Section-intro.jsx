import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, View, Text, Image } from 'react-native';

const Fondo = require('../assets/neonRoad.gif');
import Data from '../jsons/indexContent.json';
import Credito from '../jsons/creditos.json';
export default function Intro() {
    const [contenido, setContenido]= useState([]);
    const [creditos, setCredito]= useState([]);

    useEffect(
        ()=>{
            fetch({Data})
                .then(response=>response.json())
                .then(data=>setContenido(data))
                .catch(error => console.error('Error cargando el archivo JSON:', error));

            fetch({Credito})
                .then(response=>response.json())
                .then(data=>setCredito(data))
                .catch(error => console.error('Error cargando el archivo JSON:', error));
            
        },

        []
        
    );


  return (
    <View style={style.container}>
      <Text style={style.bienvenida}>¡Bienvenidos a Geek&Bites!</Text>
      <Animated.Image
        source={require('../assets/01-logo.jpeg')}
        style={[style.logoImg, { transform: [{ rotate: spin }] }]}
      />
    </View>
  );
}

const style = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Asegura que sea transparente
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover'},
  text: {
    fontSize: 24,
    color: 'black', // Asegura que el texto sea visible sobre el fondo
    fontFamily: 'comic',
  },
});