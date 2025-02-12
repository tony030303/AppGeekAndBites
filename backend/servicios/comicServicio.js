//se comunica con la BD que contiene los json
//Crea funciones que llaman al modelo Comic

//Dudas con respecto a la necesidad de estas funciones...

const comicDB = require("../database/Comic");

const getAllComics = () => {
  const todosLosComics = comicDB.getAllComics();
  return todosLosComics;
};

const createOneComic = (comicData) => {
  if(!comicData.year || isNaN(comicData.year)){ //si no es un número o es un campo vacio
    throw new Error("El año ingresado no es un valor númerico...");
  }  
  const anioActual = new Date().getFullYear();

  if(comicData.year > anioActual){
    throw new Error(`El año ingresado no puede ser mayor que el año  (${anioActual}).`)  
  }

  const nuevoComic = comicDB.createOneComic(comicData);
  return nuevoComic;
};

module.exports = { getAllComics, createOneComic };