import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

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

const style = StyleSheet.create({
  card: {
    marginBottom: 20, // espaciado inferior entre tarjetas
    alignItems: "center",
    backgroundColor: "#309dfb",
    borderRadius: 8,
    padding: 7, // espaciado interno
  },
  image: {
    width: 150,
    height: 220,
    resizeMode: "cover", // hace que la imagen conserve su relación de aspecto y llena el contenedor
    borderRadius: 8,
  },
  title: {
    marginTop: 10, // espacio superior entre la imagen y el título
    fontSize: 9.5,
    fontWeight: "bold",
    color: "#ffffff",
    fontFamily: "monospace",
  },
  year: {
    fontSize: 9,
    fontWeight: "bold",
    fontFamily: "monospace",
    color: "#ffffff",
  },
});

export default ComicCard;
