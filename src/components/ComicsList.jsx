import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import ComicCard from "../components/ComicCard";
import comicsData from "../jsons/comics.json";
import { imageMap } from "../assets/imageMap";

const ComicsList = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    // Asocia las portadas usando el mapeo de imágenes
    const transformedComics = comicsData.map((comic) => ({
      ...comic,
      cover: imageMap[comic.cover], // Obtén la ruta de la imagen desde el mapeo
    }));
    setComics(transformedComics);
  }, []);

  return (
    <ScrollView contentContainerStyle={style.list}>
      {comics.map((comic) => (
        <ComicCard
          key={comic.id}
          title={comic.title}
          year={comic.year}
          cover={comic.cover}
        />
      ))}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  list: {
    padding: 20,
  },
});

export default ComicsList;
