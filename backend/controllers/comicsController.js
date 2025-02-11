//El controlador se comunica con el Servicio
//Este hace la logica para las respuestas

//importamos el servicio
const comicsService = require("../servicios/comicServicio");

//obtener todos los comics
const getAllComics = (req, res) => {
    const todosLosComics = comicsService.getAllComics();
    res.status(200).json({ status: "OK", data: todosLosComics });
};

//crear un nuevo cómic
const createOneComic = (req, res) => {
    const { title, year } = req.body;
    const cover = req.file ? req.file.filename : null;

    if (!title || !year) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const comicCreado = comicsService.createOneComic({ title, year, cover });
    if (!comicCreado) {
        return res.status(500).json({ status: "Error", message: "No se pudo crear el cómic" });
    }
    res.status(201).json({ status: "OK", data: comicCreado });
};

module.exports = { getAllComics, createOneComic };
