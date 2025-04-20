import pkg from 'pg'; // para conectarse a la base de datos
import dotenv from 'dotenv'; // para cargar las variables de entorno

dotenv.config(); // esto carga las variables de entorno desde el archivo .env
const { Pool } = pkg; // Pool es una clase que permite crear un grupo de conexiones a la base de datos
// Se crea una instancia de Pool con la configuración de la base de datos

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

export default pool;

