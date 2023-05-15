import { Router } from 'express'
import { buscar,buscarPorId,eliminar_activoNoActivo } from '../controllers/ConsultasGenerales.Controller'
import {insertar,modificar} from "../controllers/Medidas.controller";

const router = Router()

router.get('/GM_API/Medidas/Buscar',buscar); // obtener todos las Medidas

router.get('/GM_API/Medidas/BuscarID/:param_Id',buscarPorId); // obtener una Medida por id

router.get('/GM_API/Medidas/BuscarCliente/:param_Id',buscarPorId); // obtener una Medida por cliente

router.delete('/GM_API/Medidas/Eliminar/:param_Id',eliminar_activoNoActivo);// eliminar permanentemente una Medida

router.post('/GM_API/Medidas/Insertar',insertar);// insertar una Medida

router.put('/GM_API/Medidas/Modificar/:Id_Medida',modificar);// modificar una Medida

export default router

