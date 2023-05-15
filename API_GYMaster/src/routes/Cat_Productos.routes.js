import { Router } from 'express'
import { buscar,buscarPorId,eliminar_activoNoActivo } from '../controllers/ConsultasGenerales.Controller'
import {insertar,modificar} from "../controllers/Cat_Productos.controller";

const router = Router()

router.get('/GM_API/Cat_Productos/Buscar',buscar); // obtener todos los Cat_Productoss

router.get('/GM_API/Cat_Productos/BuscarID/:param_Id',buscarPorId); // obtener un Cat_Productos por id

router.get('/GM_API/Cat_Productos/BuscarGym/:param_Id',buscarPorId); // obtener un Cat_Productos por gym

router.delete('/GM_API/Cat_Productos/Eliminar/:param_Id',eliminar_activoNoActivo);// eliminar permanentemente un Cat_Productos

router.post('/GM_API/Cat_Productos/Insertar',insertar);// insertar un Cat_Productos

router.put('/GM_API/Cat_Productos/Modificar/:Id_Cat',modificar);// modificar un Cat_Productos

export default router

