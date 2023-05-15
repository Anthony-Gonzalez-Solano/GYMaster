import { Router } from 'express'
import { buscar,buscarPorId,eliminar_activoNoActivo } from '../controllers/ConsultasGenerales.Controller'
import { insertar,modificar } from "../controllers/Detalles_Venta.controller";

const router = Router()

router.get('/GM_API/Detalles_Venta/Buscar',buscar); // obtener todos los Detalles_Ventas

router.get('/GM_API/Detalles_Venta/BuscarID/:param_Id',buscarPorId); // obtener un Detalles_Venta por id

router.get('/GM_API/Detalles_Venta/BuscarVenta/:param_Id',buscarPorId); // obtener un Detalles_Venta por cliente

router.delete('/GM_API/Detalles_Venta/Eliminar/:param_Id',eliminar_activoNoActivo);// eliminar permanentemente un Detalles_Venta

router.post('/GM_API/Detalles_Venta/Insertar',insertar) // insertar un Detalles_Venta

router.put('/GM_API/Detalles_Venta/Modificar/:Id_Detalle_Venta',modificar) // modificar un Detalles_Venta

export default router