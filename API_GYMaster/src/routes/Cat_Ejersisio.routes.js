import { Router } from 'express'
import { buscar,buscarPorId,eliminar_activoNoActivo } from '../controllers/ConsultasGenerales.Controller'
import { insertar,modificar} from "../controllers/Cat_Ejercicios.controller";

const router = Router()

router.get('/GM_API/Cat_Ejercicios/Buscar',buscar); // obtener todos los Cat_Ejercicioss

router.get('/GM_API/Cat_Ejercicios/BuscarID/:param_Id',buscarPorId); // obtener un Cat_Ejercicios por id

router.delete('/GM_API/Cat_Ejercicios/Eliminar/:param_Id',eliminar_activoNoActivo);// eliminar permanentemente un Cat_Ejercicios

router.post('/GM_API/Cat_Ejercicios/Insertar',insertar);// insertar un Cat_Ejercicios

router.put('/GM_API/Cat_Ejercicios/Modificar/:Id_Cat',modificar);// modificar un Cat_Ejercicios

export default router

