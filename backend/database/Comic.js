//Clase Comic
//Se comunica directamente con el comics.json

const fs = require("fs");
const path = require("path");
const comicsFilePath = path.join(__dirname, "../../src/jsons/comics.json");
const imageMapPath = path.join(__dirname, "../../src/assets/imageMap.js");

//funciones útiles
const escribirDatos = (data) => {
  try {
    //convierte el objeto data a JSON y lo escribe en el arcihvo json
    fs.writeFileSync(comicsFilePath, JSON.stringify(data, null, 2)); //los dos últimos parámetros son para que el JSON sea más ordenado de leer 
  } catch (error) {
    console.log("Error escribiendo en la base de datos", error);
  }
};

const readData = () => {
  try {
    const data = fs.readFileSync(comicsFilePath, "utf8"); //lee el archivo y lo almacena en data
    return JSON.parse(data); // parsea y retorna los datos como un objeto JavaScript
  } catch (error) {
    console.log("Error leyendo la base de datos", error);
    return [];
  }
};

//obtener todos los cómics
const getAllComics = () => {
  const file = readData();
  return file;
};


//crear un cómic
const createOneComic = (body) => {
  
  const file = readData();
    
  //genero el nuevo cómic
  const nuevoComic = {
    id: file.length + 1,
    ...body,
  }; 

  console.log(nuevoComic); //mostrando en pantalla para verificar
  file.push(nuevoComic); //agrego el nuevo cómic
  escribirDatos(file);

  //actualizar imageMap.js
  actualizarImageMap(nuevoComic.cover);

  return nuevoComic;  
};


//función para actualizar ImageMap
const actualizarImageMap = (coverName) => {
  try {
    let imageMapContent = fs.readFileSync(imageMapPath, "utf8"); //lectura del archivo en la ruta

    //compruebo si la img esta en imageMap (evito imgs duplicadas, aunque se puede obviar porque puede ser molesto)
    if (imageMapContent.includes(coverName)) {
      return;
    }

    // construyo la nueva entrada en imageMap
    const nuevaDir = `  "${coverName}": require("./comics/${coverName}"),\n};`;
    imageMapContent = imageMapContent.replace("};", nuevaDir); //agrego

    fs.writeFileSync(imageMapPath, imageMapContent, "utf8"); //actualizo el archivo
    console.log(`Se ha actualizado imageMap.js con: ${coverName}`);
  } catch (error) {
    console.error("Error actualizando imageMap.js", error);
  }
};

//eliminar un cómic

const deleteOneComic = (id) => {
  const comics = readData();
  const unComic = comics.find(comic => comic.id === id); //lo extraigo
  const pos = comics.indexOf(unComic); //busco la pos del comic
  var exito = 0;
  if(pos >= 0){ //si esta en una pos válida
    comics.splice(pos,1); //borra al cómic de esa pos
    escribirDatos(comics);
    exito = 1; //lo pudo hacer correctamente
  }
  return exito;
};

const updateOneComic = (id,body) => {
  const comics = readData();
  const pos = comics.findIndex(comic => comic.id === id);//obtengo la pos del cómic dado

  var exito = 0;

  if(pos >= 0){ //pos valida
    //si se encontro, actualiza el cómic con los datos proporcionados
    comics[pos] = {
      ...comics[pos],
      ...body,
    };
    escribirDatos(comics); //modifico el json
    exito = 1; //op. exitosa

  }
  return exito;
};

module.exports = { getAllComics, createOneComic, deleteOneComic, updateOneComic};
