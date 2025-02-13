import React, { useEffect, useState, useRef, useCallback } from "react";
import { FlatList, StyleSheet } from "react-native";
import ComicCard from "../components/ComicCard";
// import comicsData from "../jsons/comics.json";
import { imageMap } from "../assets/imageMap";
// import evento_comic from "../events/evento_comic";
const PAGE_SIZE = 2;

const ComicsList = () => {
  const [comicsData, setComicData] = useState(require("../jsons/comics.json"));
  const [comics, setComics] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const isFetchingRef = useRef(isFetching); // Ref para el estado isFetching
  const currentPageRef = useRef(1);

  //EVENTO PERO NO FUNCIONA :(
  // useEffect(() => {
  //   // Guardar la función de listener
  //   const listener = () => {
  //     setComicData((prevData) => [...prevData]);
  //   };

  //   // Suscribirse al evento
  //   evento_comic.addListener("comicModificado", listener);

  //   // Limpiar la suscripción al desmontar el componente
  //   return () => {
  //     evento_comic.removeListener("comicModificado", listener);
  //   };
  // }, []); // No depende de `key` porque no necesitamos recrear la suscripción

  // Sincroniza la ref con el estado real
  useEffect(() => {
    isFetchingRef.current = isFetching;
  }, [isFetching]);

  // Función memoizada para cargar cómics
  const loadMoreComics = useCallback(() => {
    if (isFetchingRef.current) return; // Usa la ref, no el estado directamente

    setIsFetching(true);

    const start = (currentPageRef.current - 1) * PAGE_SIZE;
    const end = currentPageRef.current * PAGE_SIZE;

    const newComics = comicsData.slice(start, end).map((comic) => ({
      ...comic,
      cover: imageMap[comic.cover],
    }));

    setComics((prevComics) => [...prevComics, ...newComics]);
    currentPageRef.current += 1;
    setIsFetching(false);
  }, []); // Sin dependencias: usamos refs para todo

  // Carga la primera página al montar
  useEffect(() => {
    loadMoreComics();
  }, [loadMoreComics]); // Ahora loadMoreComyarics es estable

  return (
    <FlatList
      data={comics}
      renderItem={({ item }) => (
        <ComicCard title={item.title} year={item.year} cover={item.cover} />
      )}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      contentContainerStyle={style.list}
      onEndReached={loadMoreComics}
      onEndReachedThreshold={0.1}
    />
  );
};

const style = StyleSheet.create({
  list: {
    padding: 30,
  },
});

export default ComicsList;
