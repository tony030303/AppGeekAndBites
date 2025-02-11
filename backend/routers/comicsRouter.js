const express = require("express");
const router = express.Router();
const comicsController = require("../controllers/comicsController");
const upload = require("../middlewares/multerConfig");
const path = require("path");
router.get("/", comicsController.getAllComics);
router.post("/", upload.single("cover"), comicsController.createOneComic);


// 📌 Servir imágenes estáticas para que React Native pueda acceder a ellas
//TODO: Ver si tiene que ver algo con esto
router.use(
  "/assets/comics",
  express.static(path.join(__dirname, "../../src/assets/comics"))
);

module.exports = router;
