import { Router } from 'express'
import { buscar,buscarPorId,eliminar_activoNoActivo } from '../controllers/ConsultasGenerales.Controller'
import {insertar,modificar} from "../controllers/Clientes.controller";

const router = Router()

router.get('/GM_API/Cliente/Buscar',buscar); // obtener todos los Clientes

router.get('/GM_API/Cliente/BuscarID/:param_Id',buscarPorId); // obtener un Cliente por id

router.get('/GM_API/Cliente/BuscarGym/:param_Id',buscarPorId); // obtener un Cliente por id

router.delete('/GM_API/Cliente/Eliminar/:param_Id',eliminar_activoNoActivo);// eliminar permanentemente un Cliente

router.delete('/GM_API/Cliente/ActivoNoActivo/:param_Id',eliminar_activoNoActivo);// desactivar o activar un Cliente

router.post('/GM_API/Cliente/Insertar',insertar);// insertar un Cliente

router.put('/GM_API/Cliente/Modificar/:Id_Cliente',modificar);// modificar un Cliente

export default router

