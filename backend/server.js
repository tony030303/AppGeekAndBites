const express = require("express");
const cors = require("cors"); //nos ayuda a que el server pueda ser accedido por el frontend
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 5000; //puerto

//Ruta absoluta al archivo comics.json
const comicsFilePath = path.join(__dirname, "../src/jsons/comics.json"); 

// Habilitación de CORS para permitir solicitudes de otros dominios (frontend)
app.use(cors()); //habilita CORS
app.use(express.json()); //para que los datos puedan ser leídos como un objeto JavaScript.

//ENDPOINTS:
//-------------COMICS----------
// Vincular el router de cómics
const routerComics = require("./routers/comicsRouter");
app.use("/api", routerComics);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
