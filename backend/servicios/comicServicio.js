//se comunica con la BD que contiene los json
//Crea funciones que llaman al modelo Comic

//Dudas con respecto a la necesidad de estas funciones...

const comicDB = require("../database/Comic");

const getAllComics = () => {
  const todosLosComics = comicDB.getAllComics();
  return todosLosComics;
};

const createOneComic = (comicData) => {
  const nuevoComic = comicDB.createOneComic(comicData);
  return nuevoComic;
};

module.exports = { getAllComics, createOneComic };