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
  const file = readData();

  //verificamos que no se encuentre ya
  const existe = file.some((item) => item.title === body.title);
  if (existe) {
    console.log("La comida que quiere crear ya existe");
    throw new Error("La comida que quiere crear ya existe");
  } else {
    //genero la nueva comida
    const nuevaComida = {
      index: obtenerNuevoId(file),
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

//funcion para obtener el id(evita repetidos)
function obtenerNuevoId(items) {
  // sacamos los IDs y los ordenamos de menor a mayor.
  const ids = items.map((c) => c.index).sort((a, b) => a - b);

  // empiezo con el ID mínimo posible.
  let nextId = 1;
  let contador = 0;
  // recorro los IDs ordenados.
  while (contador < ids.length && ids[contador] == nextId) {
    nextId++; //avanzo al siguiente elem
    contador++; //avanzo en la iteracion
  }
  // Una vez se haya encontrado el número, lo retorno.
  return nextId;
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

    eliminarElementoImageMap(unaComida.backgroundImage);

    exito = 1; //lo pudo hacer correctamente
  }
  return exito;
};

//función para eliminar la imagen asociada a una comida en ImageMap
const eliminarElementoImageMap = (coverName) => {
  try {
    let imageMapContent = fs.readFileSync(imageMapPath, "utf8"); //lectura del archivo en la ruta

    // construyo la entrada que deseo eliminar
    const entrada = `\n  "${coverName}": require("../assets/comidas/${coverName}"),`;

    imageMapContent = imageMapContent.replace(`${entrada}`, "");

    fs.writeFileSync(imageMapPath, imageMapContent, "utf8"); //actualizo el archivo
    console.log(`Se ha eliminado en imageMap.js : ${coverName}`);
  } catch (error) {
    console.error("Error eliminando en imageMap.js", error);
  }
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
