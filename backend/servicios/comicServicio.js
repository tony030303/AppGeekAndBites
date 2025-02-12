//se comunica con la BD que contiene los json
//Crea funciones que llaman al modelo Comic

const comicDB = require("../database/Comic");

const getAllComics = () => {
  return comicDB.getAllComics();
};

const createOneComic = (comicData) => {
  return comicDB.createOneComic(comicData);
};

module.exports = { getAllComics, createOneComic };