const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const multer = require("multer");

//Ruta al archivo de los comics
const comicsFilePath = path.join(__dirname, "../../src/jsons/comics.json");

//Configurar `multer` para guardar imágenes en la carpeta `uploads/
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "../../src/assets/comics");

    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true }); // Crea la carpeta si no existe
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Renombrar el archivo con timestamp
  },
});

const upload = multer({ storage });

//Ruta para obtener todos los cómics

router.get("/comics", (req, res) => {
  fs.readFile(comicsFilePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error al leer el archivo" });

    res.json(JSON.parse(data));
  });
});

//Ruta para agregar un nuevo cómic

// Ruta para agregar un nuevo cómic
router.post("/comics", upload.single("cover"), (req, res) => {
  const { title, year } = req.body;

  const cover = req.file ? req.file.filename : null; // Guardar la ruta de la imagen

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
      cover,
    };

    console.log(newComic);

    comics.push(newComic);

    fs.writeFile(comicsFilePath, JSON.stringify(comics, null, 2), (err) => {
      if (err)
        return res.status(500).json({ error: "Error al escribir el archivo" });

      res.json({ message: "Cómic agregado", comic: newComic });
    });
  });
});

// 📌 Servir imágenes estáticas para que React Native pueda acceder a ellas
//TODO: Ver si tiene que ver algo con esto
router.use(
  "/assets/comics",
  express.static(path.join(__dirname, "../../src/assets/comics"))
);

module.exports = router;
