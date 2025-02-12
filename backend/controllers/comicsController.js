//El controlador se comunica con el Servicio
//Este hace la logica para las respuestas

//importamos el servicio
const comicsServicio = require("../servicios/comicServicio");

//obtener todos los comics
const getAllComics = (req, res) => {
  const todosLosComics = comicsServicio.getAllComics();
  return res.status(200).json({ status: "OK", data: todosLosComics });
};

//crear un nuevo cómic
const createOneComic = (req, res) => {
  const { title, year } = req.body;
  const cover = req.file ? req.file.filename : null;
  try {
    const comicCreado = comicsServicio.createOneComic({ title, year, cover });
    return res.status(200).json({ status: "OK", data: comicCreado });  
  } catch (error) {
    return res.status(404).json({ status: "Error", message: error.message});  
  }
};

module.exports = { getAllComics, createOneComic };
