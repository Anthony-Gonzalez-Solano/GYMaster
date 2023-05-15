import { Router } from 'express'
import { buscar,buscarPorId,eliminar_activoNoActivo } from '../controllers/ConsultasGenerales.Controller'
import {insertar,modificar} from "../controllers/Rutinas.controller";

const router = Router()

router.get('/GM_API/Rutinas/Buscar',buscar); // obtener todos los usuaros

router.get('/GM_API/Rutinas/BuscarID/:param_Id',buscarPorId); // obtener un Rutina por id

router.get('/GM_API/Rutinas/BuscarCliente/:param_Id',buscarPorId); // obtener un Rutina por gym

router.delete('/GM_API/Rutinas/Eliminar/:param_Id',eliminar_activoNoActivo); // desactivar un Rutina por id

router.post('/GM_API/Rutinas/Insertar',insertar); // agregar un Rutina

router.put('/GM_API/Rutinas/Modificar/:Id_Rutina',modificar); // modificar un Rutina por id

export default router