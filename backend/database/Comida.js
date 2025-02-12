//Clase Comida
//Se comunica directamente con el COMIDAS.JS

const fs = require("fs");
const path = require("path");
const comidasFilePath = path.join(__dirname, "../../src/jsons/itemsComidas.js");

//funciones útiles
const escribirDatos = (data) => {
  try {
    //escribimos el archivo
    fs.writeFileSync(comidasFilePath, JSON.stringify(data, null, 2)); //los dos últimos parámetros son para que el JSON sea más ordenado de leer
  } catch (error) {
    console.log("Error escribiendo en la base de datos", error);
  }
};

const readData = () => {
  console.log("aca estamos 4");
  try {
    const data = fs.readFileSync(comidasFilePath, "utf8"); //lee el archivo y lo almacena en data
    return JSON.parse(data);
  } catch (error) {
    console.log("Error leyendo la base de datos", error);
    return [];
  }
};

//obtener todas las comidas
const getAllComidas = () => {
  const file = readData();
  return file;
};

//crear un comida
const createOneComida = (body) => {
  console.log("aca estamos 3");
  const file = readData();

  //verificamos que no se encuentre ya
  const existe = file.some((item) => item.title === body.title);
  if (existe) {
    console.log("La comida que quiere crear ya existe");
    throw new Error("La comida que quiere crear ya existe");
  } else {
    //procedemos a crear la comida
    // construyo la nueva imagen
    const nuevaDir = `require("../assets/comidas/${body.cover}"),\n};`;
    body.cover = nuevaDir;

    //genero la nueva comida
    const nuevaComida = {
      id: file.length + 1,
      ...body,
    };

    console.log(nuevaComida); //mostrando en pantalla para verificar

    //CORREGIR: Como guardar en un .js

    //file.push(nuevaComida); //agrego la nueva comida
    escribirDatos(file);
    return nuevaComida;
  }
};

//eliminar un comida

const deleteOneComida = (id) => {
  const comidas = readData();
  const unaComida = comidas.find((comida) => comida.id === id); //lo extraigo
  const pos = comidas.indexOf(unaComida); //busco la pos de la comida
  var exito = 0;
  if (pos >= 0) {
    //si esta en una pos válida
    comidas.splice(pos, 1); //borra a la comida de esa pos
    escribirDatos(comidas);
    exito = 1; //lo pudo hacer correctamente
  }
  return exito;
};

const updateOneComida = (id, body) => {
  const comidas = readData();
  const pos = comidas.findIndex((comida) => comida.id === id); //obtengo la pos de la comida dada

  var exito = 0;

  if (pos >= 0) {
    //pos valida
    //si se encontro, actualiza la comida con los datos proporcionados
    comidas[pos] = {
      ...comidas[pos],
      ...body,
    };
    escribirDatos(comidas); //modifico el js
    exito = 1; //op. exitosa
  }
  return exito;
};

module.exports = {
  getAllComidas,
  createOneComida,
  deleteOneComida,
  updateOneComida,
};
