import { Router } from 'express'
import { buscar,buscarPorId,eliminar_activoNoActivo } from '../controllers/ConsultasGenerales.Controller'
import { insertar,modificar } from "../controllers/Gastos_Variables.controller";

const router = Router()

router.get('/GM_API/Gastos_Variables/Buscar',buscar); // obtener todos los Gastos_Variables

router.get('/GM_API/Gastos_Variables/BuscarID/:param_Id',buscarPorId); // obtener un Gastos_Variables por id

router.get('/GM_API/Gastos_Variables/BuscarGym/:param_Id',buscarPorId); // obtener un Gastos_Variables por cliente

router.delete('/GM_API/Gastos_Variables/Eliminar/:param_Id',eliminar_activoNoActivo);// eliminar permanentemente un Gastos_Variables

router.delete('/GM_API/Gastos_Variables/ActivoNoActivo/:param_Id',eliminar_activoNoActivo);// desactivar o activar un Gastos_Variables

router.post('/GM_API/Gastos_Variables/Insertar',insertar) // insertar un Gastos_Variables

router.put('/GM_API/Gastos_Variables/Modificar/:Id_Gasto',modificar) // modificar un Gastos_Variables

export default router