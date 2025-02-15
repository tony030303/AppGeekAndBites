import React, { useEffect, useState, useRef, useCallback } from "react";
import { FlatList } from "react-native";
import ComicCard from "../ComicCard/ComicCard";
import comicsData from "../../jsons/comics.json";
import { imageMap } from "../../assets/imageMap";
import { style } from "./ComicsList.styles";
const PAGE_SIZE = 2;

const ComicsList = () => {
  console.log("cargado ComicList");
  const [comics, setComics] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const isFetchingRef = useRef(isFetching); // Ref para el estado isFetching
  const currentPageRef = useRef(1);

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

export default ComicsList;
