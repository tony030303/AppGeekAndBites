const multer = require("multer");
const path = require("path");
const fs = require("fs");

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

module.exports = multer({ storage });
