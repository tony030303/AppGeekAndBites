import React from "react";
import { ImageBackground } from "expo-image";
import ContactList from "../components/ContactosList.tsx";
import style from "../styles/style-intro.jsx";

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
        <ContactList />
      </ImageBackground>
    </>
  );
}
