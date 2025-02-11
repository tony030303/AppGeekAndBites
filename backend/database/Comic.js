//Clase Comic
//Se comunica directamente con la BD

const fs = require("fs");
const path = require("path");
const comicsFilePath = path.join(__dirname, "../../src/jsons/comics.json");
const imageMapPath = path.join(__dirname, "../../src/assets/imageMap.js");

const getAllComics = () => {
  try {
    const data = fs.readFileSync(comicsFilePath, "utf8"); 
    return JSON.parse(data);
  } catch (error) {
    console.error("Error leyendo la base de datos", error);
    return [];
  }
};

//PROBANDO ACTUALIZAR IMAGEMAP PARA MOSTRAR LA IMG EN LA LISTA DE COMICS.
const createOneComic = (comicData) => {
  try {
    const comics = getAllComics();
    const newComic = { id: comics.length + 1, ...comicData };
    console.log(newComic);
    comics.push(newComic);
    fs.writeFileSync(comicsFilePath, JSON.stringify(comics, null, 2));

    //actualizar imageMap.js
    actualizarImageMap(newComic.cover);

    return newComic;
  } catch (error) {
    console.error("Error escribiendo en la base de datos", error);
    return null;
  }
};

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

module.exports = { getAllComics, createOneComic };
