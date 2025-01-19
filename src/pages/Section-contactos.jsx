import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ImageBackground } from 'expo-image';
import {ContactList} from '../components/ContactosList.jsx';
import style from '../styles/style-intro.jsx';
import styleContactos from '../styles/style-contactos';

// Componentes


const wallpaper = require('../assets/wallPaper/NeonRoad-04.gif')



export default function Contactos() {
   //sección de contactos  

  return (
<>
   <ImageBackground
      source={wallpaper}
      style={style.background}
      contentFit="cover"
    >
   <ScrollView contentContainerStyle={style.scrollContainer}>
     <View style={style.sectionContainer}>
            <Text style={styleContactos.heading}>Contactanos!</Text> 
            <ContactList />
      </View>
  
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