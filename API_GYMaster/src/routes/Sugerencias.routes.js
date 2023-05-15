import { Router } from 'express'
import { buscar,buscarPorId,eliminar_activoNoActivo } from '../controllers/ConsultasGenerales.Controller'
import { insertar } from "../controllers/Sugerencias.controller";

const router = Router()

router.get('/GM_API/Sugerencia/Buscar',buscar); // obtener todos los Sugerencias

router.get('/GM_API/Sugerencia/BuscarID/:param_Id',buscarPorId); // obtener un Sugerencia por id

router.delete('/GM_API/Sugerencia/Eliminar/:param_Id',eliminar_activoNoActivo);// eliminar permanentemente un Sugerencia

router.post('/GM_API/Sugerencia/Insertar',insertar);// insertar un Sugerencia


export default router

