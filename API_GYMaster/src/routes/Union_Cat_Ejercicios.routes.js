import { Router } from 'express'
import { buscar,buscarPorId} from '../controllers/ConsultasGenerales.Controller'
import {insertar,modificar,eliminar} from "../controllers/Union_Cat_Ejercicios.controller";

const router = Router()

router.get('/GM_API/Union_Cat_Ejercicios/Buscar',buscar); // obtener todos los Union_Cat_Ejercicioss

router.get('/GM_API/Union_Cat_Ejercicios/BuscarID/:param_Id',buscarPorId); // obtener un Union_Cat_Ejercicios por id

router.delete('/GM_API/Union_Cat_Ejercicios/Eliminar/:param_Id',eliminar);// eliminar permanentemente un Union_Cat_Ejercicios

router.post('/GM_API/Union_Cat_Ejercicios/Insertar',insertar);// insertar un Union_Cat_Ejercicios

router.put('/GM_API/Union_Cat_Ejercicios/Modificar/:Id_param1/:Id_param2',modificar);// modificar un Union_Cat_Ejercicios

export default router

