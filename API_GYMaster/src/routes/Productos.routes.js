import { Router } from 'express'
import { buscar,buscarPorId,eliminar_activoNoActivo } from '../controllers/ConsultasGenerales.Controller'
import {insertar,modificar} from "../controllers/Productos.controller";

const router = Router()

router.get('/GM_API/Productos/Buscar',buscar); // obtener todos los usuaros

router.get('/GM_API/Productos/BuscarID/:param_Id',buscarPorId); // obtener un Producto por id

router.get('/GM_API/Productos/BuscarGym/:param_Id',buscarPorId); // obtener un Producto por gym

router.delete('/GM_API/Productos/Eliminar/:param_Id',eliminar_activoNoActivo); // desactivar un Producto por id

router.delete('/GM_API/Productos/ActivoNoActivo/:param_Id',eliminar_activoNoActivo); // desactivar un Producto por id

router.post('/GM_API/Productos/Insertar',insertar); // agregar un Producto

router.put('/GM_API/Productos/Modificar/:Id_Producto',modificar); // modificar un Producto por id

export default router