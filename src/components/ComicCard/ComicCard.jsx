import React from "react";
import { View, Text, Image } from "react-native";
import { style } from "./ComicCard.styles";

const ComicCard = ({ title, year, cover }) => {
  // se recibe la propiedades title, year y cover
  return (
    <View style={style.card}>
      {/* se muestra la imagen del comic utilizando el valor pasado como cover */}
      <Image source={cover} style={style.image} />
      {/* se muestra el título del comic */}
      <Text style={style.title}>{title}</Text>
      {/* se muestra el año del comic */}
      <Text style={style.year}>{year}</Text>
    </View>
  );
};

export default ComicCard;
