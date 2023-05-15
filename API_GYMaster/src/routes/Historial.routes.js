import { Router } from 'express'
import { buscar,buscarPorId,eliminar_activoNoActivo } from '../controllers/ConsultasGenerales.Controller'
import {insertar} from "../controllers/Historial.controller";

const router = Router()

router.get('/GM_API/Historial/Buscar',buscar); // obtener todos los Historial

router.get('/GM_API/Historial/BuscarID/:param_Id',buscarPorId); // obtener un Historial por id

router.delete('/GM_API/Historial/Eliminar/:param_Id',eliminar_activoNoActivo);// eliminar permanentemente un Historial

router.post('/GM_API/Historial/Insertar',insertar);// insertar un Historial

export default router

