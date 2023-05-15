import { Router } from 'express'
import { buscar,buscarPorId,eliminar_activoNoActivo } from '../controllers/ConsultasGenerales.Controller'
import { insertar,modificar } from "../controllers/Ejercicios.controller";

const router = Router()

router.get('/GM_API/Ejercicios/Buscar',buscar); // obtener todos los Ejercicio

router.get('/GM_API/Ejercicios/BuscarID/:param_Id',buscarPorId); // obtener un Ejercicios por id

router.get('/GM_API/Ejercicios/BuscarRutina/:param_Id',buscarPorId); // obtener un Ejercicios por cliente

router.delete('/GM_API/Ejercicios/Eliminar/:param_Id',eliminar_activoNoActivo);// eliminar permanentemente un Ejercicios

router.post('/GM_API/Ejercicios/Insertar',insertar) // insertar un Ejercicios

router.put('/GM_API/Ejercicios/Modificar/:Id_Ejercicio',modificar) // modificar un Ejercicios

export default router