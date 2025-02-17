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
    return res.status(404).json({ status: "Error", message: error.message });
  }
};

//eliminar un cómic existente

const deleteOneComic = (req, res) => {
  const comic_id = parseInt(req.params.id); //obtengo el id desde los parámetros del request
  const comicEliminado = comicsServicio.deleteOneComic(comic_id);
  if (comicEliminado == 1) {
    //si se eliminó, entonces mando OK
    res.status(200).send({ status: "Comic eliminado" });
  } else {
    //Sino, ERROR
    res.status(404).send({ status: "Error", message: "Comic no encontrado" });
  }
};

//modificar un cómic existente

const updateOneComic = (req, res) => {
  const comic_id = parseInt(req.params.id); //obtengo el id desde los parámetros del request
  const comic_body = req.body; //cuerpo de la solicitud
  try {
    const comicActualizado = comicsServicio.updateOneComic(
      comic_id,
      comic_body,
    );
    if (comicActualizado == 1) {
      return res.status(200).send({ status: "OK" });
    } else {
      return res
        .status(404)
        .send({ status: "Error", message: "Cómic no encontrado" });
    }
  } catch (error) {
    res.status(404).send({ status: "Error", message: error.message });
  }
};

const getIntervalComics = (req, res) => {
  const startIndex = parseInt(req.params.start);
  const endIndex = parseInt(req.params.end);
  const intervalosComic = comicsServicio.getIntervalComics(
    startIndex,
    endIndex,
  );
  return res.status(200).json({ status: "OK", data: intervalosComic });
};

module.exports = {
  getAllComics,
  createOneComic,
  deleteOneComic,
  updateOneComic,
  getIntervalComics,
};
