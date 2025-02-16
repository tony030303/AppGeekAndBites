//El controlador se comunica con el Servicio
//Este hace la logica para las respuestas

//importamos el servicio
const comidaServicio = require("../servicios/comidaServicio");

//obtener todos las comidas
const getAllComidas = (req, res) => {
  const todasLasComidas = comidaServicio.getAllComidas();
  return res.status(200).json({ status: "OK", data: todasLasComidas });
};

//crear una comida
const createOneComida = (req, res) => {
  console.log("aca estamos 1");
  const { title, year } = req.body;
  const cover = req.file ? req.file.filename : null;
  try {
    const comidaCreada = comidaServicio.createOneComida({
      title,
      year,
      cover,
    });
    return res.status(200).json({ status: "OK", data: comidaCreada });
  } catch (error) {
    return res.status(404).json({ status: "Error", message: error.message });
  }
};

//eliminar una comida existente

const deleteOneComida = (req, res) => {
  const comida_nombre = req.params.nombre; //obtengo el nombre desde los parámetros del request
  const comidaEliminada = comidaServicio.deleteOneComida(comida_nombre);
  if (comidaEliminada == 1) {
    //si se eliminó, entonces mando OK
    res.status(200).send({ status: "Comida eliminada del menu" });
  } else {
    //Sino, ERROR
    res.status(404).send({ status: "Error" });
  }
};

//modificar una comida existente

const updateOneComida = (req, res) => {
  const comida_nombre = req.params.nombre; //obtengo el nombre desde los parámetros del request
  const comida_body = req.body; //cuerpo de la solicitud
  try {
    const comidaActualizada = comidaServicio.updateOneComida(
      comida_nombre,
      comida_body
    );
    if (comidaActualizada === 1) {
      return res.status(200).send({ status: "OK" });
    } else {
      return res
        .status(404)
        .send({ status: "Error", message: "Comida no encontrada" });
    }
  } catch (error) {
    res.status(404).send({ status: "Error", message: error.message });
  }
};
module.exports = {
  getAllComidas,
  createOneComida,
  deleteOneComida,
  updateOneComida,
};
