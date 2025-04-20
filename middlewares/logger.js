// qué hace este código?
// Respuesta: Este código define un middleware de Express que registra la fecha y hora de cada solicitud (en formato ISO)  a la ruta original. Se utiliza para llevar un registro de las solicitudes realizadas al servidor. Lo podemos ver en la terminal, cada vez que se haga una consulta
// middlewares/logger.js

const logger = (req, res, next) => {
    const time = new Date().toISOString(); // Obtener la fecha y hora actual en formato ISO
    console.log(`[${time}] Se consultó la ruta: ${req.originalUrl}`); // Registrar la ruta original de la solicitud
    next(); // Llamar a la siguiente función middleware en la pila
  };
  
  export default logger;
  

  /* Un middleware es una función que se ejecuta entre la petición del usuario y la respuesta del servidor. En este caso, logger.js registra cada vez que se hace una consulta a cualquier ruta. Se usa para modularizar tareas comunes como logs, autenticación, validaciones, etc. Esto mejora la escalabilidad y mantenimiento del código. */