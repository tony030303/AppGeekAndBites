const express = require("express");
const cors = require("cors"); //nos ayuda a que el server pueda ser accedido por el frontend
const app = express();
const PORT = 5000; //puerto

// Habilitación de CORS para permitir solicitudes de otros dominios (frontend distinto puerto)
app.use(cors()); //habilita CORS
app.use(express.json()); //para que los datos puedan ser leídos como un objeto JavaScript.

//-------------COMICS----------
// Vinculación del router de cómics
const routerComics = require("./routers/comicsRouter");
const routerComidas = require("./routers/comidasRouter");

//ENDPOINT para comics:
app.use("/comics", routerComics);
app.use("/comidas", routerComidas);

// Iniciar servidor
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server en ejecución: http://192.168.1.139:${PORT}`);
});
