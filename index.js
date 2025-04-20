import app from './app.js'; // Importamos la aplicación de Express desde app.js
import dotenv from 'dotenv'; // Importamos dotenv para cargar las variables de entorno

dotenv.config(); // Cargamos las variables de entorno desde el archivo .env

const PORT = process.env.PORT || 3000; // Definimos el puerto en el que escuchará el servidor, tomando el valor de la variable de entorno PORT o 3000 por defecto
 // Iniciamos el servidor y lo hacemos escuchar en el puerto definido
// y mostramos un mensaje en la consola indicando que el servidor está en funcionamiento
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
