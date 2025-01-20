import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ImageBackground } from "expo-image";
import ContactList from "../components/ContactosList.jsx";
import style from "../styles/style-intro.jsx";
import styleContactos from "../styles/style-contactos";

// Componentes

const wallpaper = require("../assets/wallPaper/NeonRoad-04.gif");

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
