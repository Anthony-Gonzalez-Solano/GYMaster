import { Router } from 'express'
import { buscar,buscarPorId,eliminar_activoNoActivo } from '../controllers/ConsultasGenerales.Controller'
import { insertar,modificar } from "../controllers/Ventas.controller";

const router = Router()

router.get('/GM_API/Ventas/Buscar',buscar); // obtener todos los Ventass

router.get('/GM_API/Ventas/BuscarID/:param_Id',buscarPorId); // obtener un Ventas por id

router.get('/GM_API/Ventas/BuscarGym/:param_Id',buscarPorId); // obtener un Ventas por gym

router.get('/GM_API/Ventas/BuscarCliente/:param_Id',buscarPorId); // obtener un Ventas por cliente

router.delete('/GM_API/Ventas/Eliminar/:param_Id',eliminar_activoNoActivo);// eliminar permanentemente un Ventas

router.post('/GM_API/Ventas/Insertar',insertar) // insertar un Ventas

router.put('/GM_API/Ventas/Modificar/:Id_Venta',modificar) // modificar un Ventas

export default router