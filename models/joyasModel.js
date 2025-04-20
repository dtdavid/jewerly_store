// qué hace models?
// models es una capa de acceso a datos que interactúa con la base de datos
// y proporciona funciones para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en las joyas.
// models se encarga de la lógica de negocio relacionada con las joyas y proporciona una interfaz para que los controladores interactúen con la base de datos.
// models consulta a través de un pool a la base de datos y proporciona funciones para interactuar con los datos de las joyas.

import pool from '../db/connection.js'; //importamos la conexión a la base de datos
import format from 'pg-format'; //importamos pg-format para formatear las consultas SQL



// Función para consulta general de las joyas, usamos parámetros con valores por defecto
export const getJoyas = async ({ limits = 3, page = 1, order_by = 'id_ASC' }) => {
  // Separamos el nombre de la columna y la dirección (ASC o DESC)
  const [campo, direccion] = order_by.split('_');

  // Usamos pg-format para insertar dinámicamente columna y orden
  const query = format(
    'SELECT * FROM inventario ORDER BY %I %s LIMIT %L OFFSET %L',
    campo,
    direccion,
    limits,
    (page - 1) * limits  //OFFSET para paginación
  );
  // Ejecutamos la consulta y guardamos el resultado en la variable rows
  const { rows } = await pool.query(query);
  //return rows;

  // Devolver las joyas con el enlace href
  return rows.map(joya => ({
    ...joya, // Mantener todos los atributos de la joya
    href: `/joyas/joya/${joya.id}` // Añadir el enlace a cada joya
  }));
};


// Función para aplicar filtros dinámicos
export const getJoyasFiltradas = async ({precio_min, precio_max, categoria, metal}) => {
    // Construimos condiciones dinámicamente según lo que venga definido
    let condiciones = [];
    let valores = [];
  
    if (precio_min) {
      condiciones.push(`precio >= %L`);
      valores.push(Number(precio_min));
    }
  
    if (precio_max) {
      condiciones.push(`precio <= %L`);
      valores.push(Number(precio_max));
    }
  
    if (categoria) {
      condiciones.push(`categoria = %L`);
      valores.push(categoria);
    }

    if (metal) {
        condiciones.push(`metal = %L`);
        valores.push(metal);
      }
  
    // Si no se pasan filtros, devolver todos los productos
    const where = condiciones.length > 0 ? `WHERE ${condiciones.join(' AND ')}` : '';
  
    const query = format(`SELECT * FROM inventario ${where}`, ...valores);
    const { rows } = await pool.query(query);
    return rows;
  };
  // Función para obtener el total de joyas 
  export const getTotalJoyas = async () => {
    const { rows } = await pool.query('SELECT COUNT(*) FROM inventario');
    return rows[0].count;
  };
  // Función para obtener el stock total de joyas
  export const getStockTotal = async () => {
    const { rows } = await pool.query('SELECT SUM(stock) FROM inventario');
    return rows[0].sum;
  };
  