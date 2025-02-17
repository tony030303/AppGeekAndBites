import React, { useEffect, useState, useRef, useCallback } from "react";
import { FlatList } from "react-native";
import ComicCard from "../ComicCard/ComicCard";
import { imageMap } from "../../assets/imageMap";
import { style } from "./ComicsList.styles";
import { solicitarIntervaloComics } from "../../services/comics.service";

const PAGE_SIZE = 2;

const ComicsList = () => {
  const [comics, setComics] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const isFetchingRef = useRef(isFetching);
  const currentPageRef = useRef(0);

  // Sincroniza la ref con el estado real
  useEffect(() => {
    isFetchingRef.current = isFetching;
  }, [isFetching]);

  // Función memoizada para cargar cómics
  const loadMoreComics = useCallback(async () => {
    if (isFetchingRef.current) return;
    setIsFetching(true);
    //calcular indices inicial y final
    const start = currentPageRef.current * PAGE_SIZE + currentPageRef.current;
    const end = start + PAGE_SIZE;

    //extraer json seccionado desde start hasta end inclusive
    const response = await solicitarIntervaloComics(start, end);

    //conversion e insercion de comic
    const newComics = response.data.data.map((comic) => ({
      ...comic,
      cover: imageMap[comic.cover],
    }));

    setComics((prevComics) => [...prevComics, ...newComics]);
    currentPageRef.current += 1; // Aumenta la página correctamente

    setIsFetching(false);
  }, []);

  // // Carga la primera página al montar (FUE RETIRADO PORQUE FLATLIST LLAMA AUTOMATICAMENTE A loadmorecomics!!!)
  // useEffect(() => {
  //   loadMoreComics();
  // }, [loadMoreComics]); // Solo se ejecuta si initialLoadDone es false

  return (
    <FlatList
      data={comics}
      extraData={comics}
      renderItem={({ item }) => (
        <ComicCard title={item.title} year={item.year} cover={item.cover} />
      )}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      contentContainerStyle={style.list}
      onEndReached={loadMoreComics} // Solo permite onEndReached después de la carga inicial
      onEndReachedThreshold={0.1}
    />
  );
};

export default ComicsList;
