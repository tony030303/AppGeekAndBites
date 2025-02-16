const express = require("express");
const router = express.Router(); //creación del router
const comidasController = require("../controllers/comidasController");
const upload = require("../middlewares/multerConfig");
const path = require("path");

router.get("/", comidasController.getAllComidas); //Obtener todos las comidas
router.post("/", upload.single("cover"), comidasController.createOneComida); //crear un nueva carta de comida
router.get("/:nombre", comidasController.deleteOneComida); //eliminar una comida (se usa GET para probar en la página web)
router.put("/:nombre", comidasController.updateOneComida); //actualizar una comida

module.exports = router;
