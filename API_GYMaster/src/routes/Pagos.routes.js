import { Router } from 'express'
import { buscar,buscarPorId,eliminar_activoNoActivo } from '../controllers/ConsultasGenerales.Controller'
import {insertar,modificar} from "../controllers/Pagos.controller";

const router = Router()

router.get('/GM_API/Pagos/Buscar',buscar); // obtener todos las Pagos

router.get('/GM_API/Pagos/BuscarID/:param_Id',buscarPorId); // obtener una Pago por id

router.get('/GM_API/Pagos/BuscarGym/:param_Id',buscarPorId); // obtener una Pago por gym

router.get('/GM_API/Pagos/BuscarCliente/:param_Id',buscarPorId); // obtener una Pago por cliente

router.delete('/GM_API/Pagos/Eliminar/:param_Id',eliminar_activoNoActivo);// eliminar permanentemente una Pago

router.post('/GM_API/Pagos/Insertar',insertar);// insertar una Pago

router.put('/GM_API/Pagos/Modificar/:Id_Pago',modificar);// modificar una Pago

export default router

