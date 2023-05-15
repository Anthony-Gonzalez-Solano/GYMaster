import { Router } from 'express'
import { buscar,buscarPorId,eliminar_activoNoActivo } from '../controllers/ConsultasGenerales.Controller'
import { insertar,modificar } from "../controllers/Gastos_Fijos.controller";

const router = Router()

router.get('/GM_API/Gastos_Fijos/Buscar',buscar); // obtener todos los Gastos_Fijos

router.get('/GM_API/Gastos_Fijos/BuscarID/:param_Id',buscarPorId); // obtener un Gastos_Fijos por id

router.get('/GM_API/Gastos_Fijos/BuscarGym/:param_Id',buscarPorId); // obtener un Gastos_Fijos por cliente

router.delete('/GM_API/Gastos_Fijos/Eliminar/:param_Id',eliminar_activoNoActivo);// eliminar permanentemente un Gastos_Fijos

router.delete('/GM_API/Gastos_Fijos/ActivoNoActivo/:param_Id',eliminar_activoNoActivo);// desactivar o activar un Gastos_Fijos

router.post('/GM_API/Gastos_Fijos/Insertar',insertar) // insertar un Gastos_Fijos

router.put('/GM_API/Gastos_Fijos/Modificar/:Id_Gasto',modificar) // modificar un Gastos_Fijos

export default router