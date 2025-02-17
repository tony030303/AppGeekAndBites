import React from "react";
import { ImageBackground } from "expo-image";
import ContactList from "../../components/ContactosList/ContactosList.tsx";
import style from "../Section-intro/style-intro.js";

// Componentes

const wallpaper = require("../../assets/wallPaper/NeonRoad-04.gif");

export default function Contactos() {
  //sección de contactos

  return (
    <>
      <ImageBackground
        source={wallpaper}
        style={style.background} 
        contentFit="cover" // el fondo cubre todo el área disponible sin deformarse
      >
        <ContactList />
      </ImageBackground>
    </>
  );
}
