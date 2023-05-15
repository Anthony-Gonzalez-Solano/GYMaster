import { Router } from 'express'
import { buscar,buscarPorId,eliminar_activoNoActivo } from '../controllers/ConsultasGenerales.Controller'
import {insertar,modificar} from "../controllers/Gyms.controller";

const router = Router()

router.get('/GM_API/Gimnasio/Buscar',buscar); // obtener todos los gimnasios

router.get('/GM_API/Gimnasio/BuscarID/:param_Id',buscarPorId); // obtener un gimnasio por id

router.delete('/GM_API/Gimnasio/Eliminar/:param_Id',eliminar_activoNoActivo);// eliminar permanentemente un gimnasio

router.delete('/GM_API/Gimnasio/ActivoNoActivo/:param_Id',eliminar_activoNoActivo);// desactivar o activar un gimnasio

router.post('/GM_API/Gimnasio/Insertar',insertar);// insertar un gimnasio

router.put('/GM_API/Gimnasio/Modificar/:Id_Gym',modificar);// modificar un gimnasio

export default router

