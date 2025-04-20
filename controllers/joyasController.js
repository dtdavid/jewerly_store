//import pool from '../db/connection.js';
// Importamos la función getJoyas desde el modelo
import { getJoyas, getJoyasFiltradas, getStockTotal, getTotalJoyas} from '../models/joyasModel.js';

// Creamos una función asincrónica que se ejecutará cuando se haga una petición GET a /joyas
export const mostrarJoyas = async (req, res) => {
  try {
    // Extraemos los parámetros de la query string con valores por defecto si no vienen en la URL
    const { limits = 3, page = 1, order_by = 'id_ASC' } = req.query;

    // Llamamos a la función del modelo pasándole esos valores
    // Esta función realiza la consulta SQL a la base de datos
    const joyas = await getJoyas(limits, page, order_by);

    if(!joyas || joyas.length === 0) throw new Error('No se encontraron joyas en la base de datos.');

    //para mostrar HATEOAS recuperamos total y stock de la base de datos
    // Pasamos estas funciones a modelo para que se ejecuten en la base de datos
    // const totalJoyas = await pool.query('SELECT COUNT(*) FROM inventario');
    // const stockTotal = await pool.query('SELECT SUM(stock) FROM inventario');
    const totalJoyas = await getTotalJoyas();
    const stockTotal = await getStockTotal();

    res.json({
      totalJoyas: totalJoyas,//.rows[0].count,
      stockTotal: stockTotal,//.rows[0].sum,
      results: joyas
    });

    // Respondemos al cliente con los datos obtenidos en formato JSON

    //res.json(joyas);
  
} catch (error) {
    // Si ocurre algún error, lo mostramos en consola para debug
    console.error(error);

    // Enviamos al cliente un mensaje de error con código 500
    res.status(500).json({ error: error.message });
  }
};

// Nueva función para mostrar joyas con filtros dinámicos
export const mostrarJoyasPorFiltros = async (req, res) => {
    try {
      const filtros = req.query;
      const joyas = await getJoyasFiltradas(filtros);
      if (!joyas || joyas.length === 0) throw new Error("No se encontraron joyas con esos filtros.");
      res.json(joyas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };