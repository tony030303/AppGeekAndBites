import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ComicCard = ({ title, year, cover }) => {
  return (
    <View style={style.card}>
      <Image source={cover} style={style.image} />
      <Text style={style.title}>{title}</Text>
      <Text style={style.year}>{year}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 150,
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  year: {
    fontSize: 14,
    color: "#aaa",
  },
});

export default ComicCard;
