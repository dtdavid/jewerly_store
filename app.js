import express from 'express'; // Importamos express para crear el servidor
import cors from 'cors'; // Importamos cors para permitir peticiones de otros dominios

import joyasRouter from './routers/joyasRouter.js'; // Importamos las rutas de joyas
import logger from './middlewares/logger.js'; // Importamos el middleware de logger
// Importamos el middleware de logger para registrar las peticiones en la consola

const app = express(); // Creamos una instancia de express
// Configuramos el servidor para que escuche en el puerto 3000 o en el puerto definido en la variable de entorno PORT

app.use(cors()); // Configuramos CORS para permitir peticiones de otros dominios
app.use(express.json()); // Middleware para parsear el cuerpo de las peticiones en formato JSON
app.use(logger); // middleware de reporte
app.use("/joyas", joyasRouter); // rutas

export default app;
