//se comunica con la BD que contiene los json
//Crea funciones que llaman al modelo Comida (validaciones)

const comidaDB = require("../database/Comida");

const getAllComidas = () => {
  const todasLasComidas = comidaDB.getAllComidas();
  return todasLasComidas;
};

const createOneComida = (comidaData) => {
  if (!comidaData.title) {
    //si no es un string o es un campo vacio
    throw new Error("El titulo ingresado no es valido...");
  }

  const nuevaComida = comidaDB.createOneComida(comidaData);
  return nuevaComida;
};

const deleteOneComida = (nombre) => {
  //verificar que
  if (!nombre.trim()) {
    //si es un campo vacio
    throw new Error("No ingreso el nombre del plato...");
  }

  const unaComida = comidaDB.deleteOneComida(nombre);
  return unaComida;
};

const updateOneComida = (nombre, body) => {
  if (!nombre.trim()) {
    //si es un campo vacio
    throw new Error("No ingreso el nombre del plato...");
  }

  const unaComida = comidaDB.updateOneComida(nombre, body);
  return unaComida;
};

module.exports = {
  getAllComidas,
  createOneComida,
  deleteOneComida,
  updateOneComida,
};
