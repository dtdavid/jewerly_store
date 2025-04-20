// routes/joyasRouter.js
import { Router } from 'express';
import { mostrarJoyas, mostrarJoyasPorFiltros } from '../controllers/joyasController.js';

const router = Router();
// ruta para obtener joyas
router.get('/', mostrarJoyas);


// Nueva ruta: /joyas/filtros
router.get("/filtros", mostrarJoyasPorFiltros);

export default router;
