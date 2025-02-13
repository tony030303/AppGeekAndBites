const express = require("express");
const router = express.Router(); //creación del router
const comicsController = require("../controllers/comicsController");
const upload = require("../middlewares/multerConfig");
const path = require("path");

router.get("/", comicsController.getAllComics); //Obtener todos los cómics
router.post("/", upload.single("cover"), comicsController.createOneComic); //crear un nuevo cómic
router.get("/:id", comicsController.deleteOneComic); //eliminar un nuevo cómic (se usa GET para probar en la página web)
router.put("/:id", comicsController.updateOneComic); //actualizar un cómic

// Servir imágenes estáticas para que React Native pueda acceder a ellas
//TODO: Ver si tiene que ver algo con esto (por ahora no se está usando..)
router.use(
  "/assets/comics",
  express.static(path.join(__dirname, "../../src/assets/comics")),
);

module.exports = router;
