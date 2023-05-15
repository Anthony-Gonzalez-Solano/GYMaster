import { Router } from 'express'
import { buscar,buscarPorId} from '../controllers/ConsultasGenerales.Controller'
import {insertar,modificar,eliminar} from "../controllers/Union_Cat_Productos.controller";

const router = Router()

router.get('/GM_API/Union_Cat_Productos/Buscar',buscar); // obtener todos los Union_Cat_Productoss

router.get('/GM_API/Union_Cat_Productos/BuscarID/:param_Id',buscarPorId); // obtener un Union_Cat_Productos por id

router.delete('/GM_API/Union_Cat_Productos/Eliminar/:param_Id',eliminar);// eliminar permanentemente un Union_Cat_Productos

router.post('/GM_API/Union_Cat_Productos/Insertar',insertar);// insertar un Union_Cat_Productos

router.put('/GM_API/Union_Cat_Productos/Modificar/:Id_param1/:Id_param2',modificar);// modificar un Union_Cat_Productos

export default router

