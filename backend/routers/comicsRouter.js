const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

//Ruta al archivo de los comics
const comicsFilePath = path.join(__dirname, "../../src/jsons/comics.json");

//Ruta para obtener todos los cómics

router.get("/comics", (req, res) => {
  fs.readFile(comicsFilePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error al leer el archivo" });

    res.json(JSON.parse(data));
  });
});


//Ruta para agregar un nuevo cómic

// Ruta para agregar un nuevo cómic
router.post("/comics", (req, res) => {
  const { title, year } = req.body;

  if (!title || !year) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  fs.readFile(comicsFilePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error al leer el archivo" });

    let comics = JSON.parse(data);
    const newComic = {
      id: comics.length + 1,
      title,
      year,
      //lo del atributo de la imagen ta raro por ahora solo carga titulo y año en comics
    };

    comics.push(newComic);

    fs.writeFile(comicsFilePath, JSON.stringify(comics, null, 2), (err) => {
      if (err)
        return res.status(500).json({ error: "Error al escribir el archivo" });

      res.json({ message: "Cómic agregado", comic: newComic });
    });
  });
});

module.exports = router;
