import { Router } from 'express'
import { buscar,buscarPorId,eliminar_activoNoActivo } from '../controllers/ConsultasGenerales.Controller'
import { insertar,modificar } from "../controllers/Cobros_Extra.controller";

const router = Router()

router.get('/GM_API/Cobros_Extra/Buscar',buscar); // obtener todos los Cobros_Extras

router.get('/GM_API/Cobros_Extra/BuscarID/:param_Id',buscarPorId); // obtener un Cobros_Extra por id

router.get('/GM_API/Cobros_Extra/BuscarPago/:param_Id',buscarPorId); // obtener un Cobros_Extra por pago

router.delete('/GM_API/Cobros_Extra/Eliminar/:param_Id',eliminar_activoNoActivo);// eliminar permanentemente un Cobros_Extra

router.post('/GM_API/Cobros_Extra/Insertar',insertar) // insertar un Cobros_Extra

router.put('/GM_API/Cobros_Extra/Modificar/:Id_Extra',modificar) // modificar un Cobros_Extra

export default router