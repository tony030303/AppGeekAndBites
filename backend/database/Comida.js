//Clase Comida
//Se comunica directamente con el COMIDAS.JS

const fs = require("fs");
const path = require("path");
const comidasFilePath = path.join(__dirname, "../../src/jsons/comidas.json");
const imageMapPath = path.join(__dirname, "../../src/jsons/imageComidas.js");

//funciones útiles
const escribirDatos = (data) => {
  try {
    //convierte el objeto data a JSON y lo escribe en el arcihvo json
    fs.writeFileSync(comidasFilePath, JSON.stringify(data, null, 2)); //los dos últimos parámetros son para que el JSON sea más ordenado de leer
  } catch (error) {
    console.log("Error escribiendo en la base de datos", error);
  }
};

const readData = () => {
  console.log("aca estamos 4");
  try {
    const data = fs.readFileSync(comidasFilePath, "utf8"); //lee el archivo y lo almacena en data

    //Convertir el contenido actual en un array de objetos
    const elementos = JSON.parse(data);

    return elementos;
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
    //genero la nueva comida
    const nuevaComida = {
      index: file.length + 1,
      title: body.title,
      backgroundImage: body.cover,
      backContent: body.year,
    };

    console.log(nuevaComida); //mostrando en pantalla para verificar

    // Agregar el nuevo elemento
    file.push(nuevaComida);
    escribirDatos(file);

    //actualizamos el imageComidas
    actualizarImageMap(nuevaComida.backgroundImage);

    return nuevaComida;
  }
};

//función para actualizar ImageMap
const actualizarImageMap = (coverName) => {
  try {
    let imageMapContent = fs.readFileSync(imageMapPath, "utf8"); //lectura del archivo en la ruta

    // construyo la nueva entrada en imageMap
    const nuevaDir = `  "${coverName}": require("../assets/comidas/${coverName}"),\n};`;
    imageMapContent = imageMapContent.replace("};", nuevaDir); //agrego

    fs.writeFileSync(imageMapPath, imageMapContent, "utf8"); //actualizo el archivo
    console.log(`Se ha actualizado imageMap.js con: ${coverName}`);
  } catch (error) {
    console.error("Error actualizando imageMap.js", error);
  }
};

//eliminar un comida

const deleteOneComida = (nombre) => {
  const comidas = readData();
  const unaComida = comidas.find((comida) => comida.title === nombre); //lo extraigo
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

const updateOneComida = (nombre, body) => {
  const comidas = readData();
  const pos = comidas.findIndex((comida) => comida.title === nombre); //obtengo la pos de la comida dada

  var exito = 0;

  if (pos >= 0) {
    //pos valida
    //si se encontro, actualiza la comida con los datos proporcionados
    comidas[pos] = {
      ...comidas[pos],
      backContent: body.descri,
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
