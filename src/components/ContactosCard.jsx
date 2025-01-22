import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ImageBackground } from "expo-image";
import styles from "../styles/style-contactos.jsx";
import { imageContactsMap } from "../assets/imageContactsMap.js";
const gifCard = require("../assets/vaporgif.gif");

//TouchableOpacity: Nos sirve para detectar interacciones táctiles (en mi caso, lo uso para que cuando el usuario toque alguna de las tarjetas se den vuelta)
export const ContactCard = ({
  contacto,
  index,
  tarjetasVolteadas,
  voltearTarjeta,
}) => {
  //Propiedades que contiene:
  //Contacto: Datos del .json
  //index (índice)
  //tarjetasVolteadas: Arreglo que indica que tarjetas ya se voltearon
  //voltearTarjeta: Función que maneja el volteo de tarjetas
  return (
    //Cuando se está presionando (onPress), llama a voltearTarjeta según la tarjeta presionada (index)
    <TouchableOpacity
      key={index}
      style={styles.cardContainer}
      onPress={() => voltearTarjeta(index)}
    >
      <View
        //Cara frontal de la tarjeta (donde se ve el logo del contacto)
        style={[
          styles.cardFront, //
          {
            //transform nos sirve para aplicar transformaciones visuales, en mi caso, para rotar en el eje Y.
            //sabemos que tarjetasVolteadas es un booleano que indica si la tarjeta se volteó. Si está en true, entonces la tarjeta rota 180grados para mostrar la cara trasera de la tarjeta.
            transform: tarjetasVolteadas[index]
              ? [{ rotateY: "180deg" }]
              : [{ rotateY: "0deg" }],
          },
        ]}
      >
        <View
          style={styles.imageContainer}
          //Acá defino el estilo (tamaño de la imagen) y pongo la imagen correspondiente
        >
          <Image
            source={imageContactsMap[contacto.backgroundImage]}
            style={styles.image}
            resizeMode="contain" //Ajusto la imagen dentro del container para mantener la relación de aspecto.
          />
        </View>
      </View>

      <View
        //Cara trasera de la tarjeta (donde se ve la info, y de fondo el gif)
        style={[
          styles.cardBack,
          {
            //idem que la parte frontal de la tarjeta, solo que acá pasaria de la parte trasera a la parte frontal
            transform: tarjetasVolteadas[index]
              ? [{ rotateY: "0deg" }]
              : [{ rotateY: "180deg" }],
          },
        ]}
      >
        <ImageBackground
          //coloco el gif para el fondo
          source={gifCard}
          style={styles.cardBackBackground}
          contentFit="cover"
        >
          <Text style={styles.contentText}>{contacto.backContent}</Text>
          {contacto.boldText && (
            <Text style={styles.boldText}>{contacto.boldText}</Text>
          )}
        </ImageBackground>
      </View>
    </TouchableOpacity> //cierro el componente táctil
  );
};

export default ContactCard; //Exportación
