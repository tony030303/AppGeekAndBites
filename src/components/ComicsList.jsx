import React, { useEffect, useState, useRef } from "react";
import { FlatList, StyleSheet } from "react-native";
import ComicCard from "../components/ComicCard";
import comicsData from "../jsons/comics.json";
import { imageMap } from "../assets/imageMap";

const PAGE_SIZE = 2; //número de cómics a cargar por cada página

const ComicsList = () => {
  const [comics, setComics] = useState([]); //estado que contiene la lista de cómics cargados
  const [isFetching, setIsFetching] = useState(false); //estado para controlar si actualmente se están cargando más cómics

  //efecto que se ejecuta al montar el componente para cargar la primera página de datos
  useEffect(() => {
    //cargar la primera página de datos
    loadMoreComics();
  }, []);

  //referencia para llevar el control de la página actual sin re-renderizar el componente
  const currentPageRef = useRef(1);

  //funcion que carga más cómics cuando se alcanza el final de la lista
  const loadMoreComics = () => {
    //verifica si ya se están cargando datos para evitar llamadas simultáneas
    if (isFetching) return;

    setIsFetching(true); //activa la bandera de carga

    //se calcula el rango de indices de los comics que deben cargarse
    const start = (currentPageRef.current - 1) * PAGE_SIZE;
    const end = currentPageRef.current * PAGE_SIZE;

    //obtiene los comics del rango actual y agrega las imagenes correspondientes
    const newComics = comicsData.slice(start, end).map((comic) => ({
      ...comic,
      cover: imageMap[comic.cover], //cada comic se asocia con su imagen correspondiente
    }));

    //actualiza la lista de cómics con los nuevos
    setComics((prevComics) => [...prevComics, ...newComics]);

    currentPageRef.current += 1; //se incrementa la página actual
    setIsFetching(false); //se desactiva la bandera de carga
  };

  return (
    <FlatList
      //datos que se renderizan en la lista
      data={comics}
      //componente que renderiza cada elemento de la lista
      renderItem={({ item }) => (
        <ComicCard title={item.title} year={item.year} cover={item.cover} />
      )}
      keyExtractor={(item, index) => `${item.id}-${index}`} //se genera claves únicas
      contentContainerStyle={style.list} //estilo de la lista
      onEndReached={loadMoreComics} //se detecta cuando se alcanza el final de la lista para cargar más datos
      onEndReachedThreshold={0.1} //es un umbral que determina cuando se ejecuta onEndReached
    />
  );
};

const style = StyleSheet.create({
  list: {
    padding: 30, //espaciado interno
  },
});

export default ComicsList;
