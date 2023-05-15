import { Router } from 'express'
import { buscar,buscarPorId,eliminar_activoNoActivo } from '../controllers/ConsultasGenerales.Controller'
import {insertar,modificar} from "../controllers/Cuotas.controller";

const router = Router()

router.get('/GM_API/Cuotas/Buscar',buscar); // obtener todos los Cuotas

router.get('/GM_API/Cuotas/BuscarID/:param_Id',buscarPorId); // obtener un Cuotas por id

router.get('/GM_API/Cuotas/BuscarGym/:param_Id',buscarPorId); // obtener un Cuotas por gym

router.delete('/GM_API/Cuotas/Eliminar/:param_Id',eliminar_activoNoActivo);// eliminar permanentemente un Cuotas

router.delete('/GM_API/Cuotas/ActivoNoActivo/:param_Id',eliminar_activoNoActivo);// desactivar o activar un Cuotas

router.post('/GM_API/Cuotas/Insertar',insertar);// insertar un Cuotas

router.put('/GM_API/Cuotas/Modificar/:Id_Cuota',modificar);// modificar un Cuotas

export default router

