//Clase Comic
//Se comunica directamente con la BD

const fs = require("fs");
const path = require("path");
const comicsFilePath = path.join(__dirname, "../../src/jsons/comics.json");

const getAllComics = () => {
    try {
        const data = fs.readFileSync(comicsFilePath, "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error leyendo la base de datos", error);
        return [];
    }
};

const createOneComic = (comicData) => {
    try {
        const comics = getAllComics();
        const newComic = { id: comics.length + 1, ...comicData };
        console.log(newComic);
        comics.push(newComic);
        fs.writeFileSync(comicsFilePath, JSON.stringify(comics, null, 2));
        return newComic;
    } catch (error) {
        console.error("Error escribiendo en la base de datos", error);
        return null;
    }
};

module.exports = { getAllComics, createOneComic };
