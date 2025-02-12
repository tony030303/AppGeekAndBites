//se comunica con la BD que contiene los json
//Crea funciones que llaman al modelo Comida (validaciones)

const { isStringObject } = require("util/types");
const comidaDB = require("../database/Comida");

const getAllComidas = () => {
  const todasLasComidas = comidaDB.getAllComidas();
  return todasLasComidas;
};

const createOneComida = (comidaData) => {
  console.log("aca estamos 2");
  if (!comidaData.title) {
    //si no es un string o es un campo vacio
    throw new Error("El titulo ingresado no es valido...");
  }

  const nuevaComida = comidaDB.createOneComida(comidaData);
  return nuevaComida;
};

const deleteOneComida = (id) => {
  //verificar que
  if (!id || isNaN(id)) {
    //si no es un número o es un campo vacio
    throw new Error("El id ingresado no es un valor númerico...");
  }

  const unaComida = comidaDB.deleteOneComida(id);
  return unaComida;
};

const updateOneComida = (id, body) => {
  if (!comidaData.titulo || !isStringObject(comidaData.titulo)) {
    //si no es un string o es un campo vacio
    throw new Error("El titulo ingresado no es valido...");
  }

  const unaComida = comidaDB.updateOneComida(id, body);
  return unaComida;
};

module.exports = {
  getAllComidas,
  createOneComida,
  deleteOneComida,
  updateOneComida,
};
