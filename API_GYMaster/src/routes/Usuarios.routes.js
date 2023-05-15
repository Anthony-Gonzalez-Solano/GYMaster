import { Router } from 'express'
import { buscar,buscarPorId,eliminar_activoNoActivo } from '../controllers/ConsultasGenerales.Controller'
import {insertar,modificar,sumarConeccion,restarConeccion,comprobacion,ActualizarInteraccion} from "../controllers/Usuarios.controller";

const router = Router()

router.get('/GM_API/Usuario/Buscar',buscar); // obtener todos los usuaros

router.get('/GM_API/Usuario/BuscarID/:param_Id',buscarPorId); // obtener un usuario por id

router.delete('/GM_API/Usuario/Eliminar/:param_Id',eliminar_activoNoActivo); // desactivar un usuario por id

router.delete('/GM_API/Usuario/ActivoNoActivo/:param_Id',eliminar_activoNoActivo); // desactivar un usuario por id

router.post('/GM_API/Usuario/Insertar',insertar); // agregar un usuario

router.put('/GM_API/Usuario/Modificar/:Id_Usuario',modificar); // modificar un usuario por id

router.put('/GM_API/Usuario/SumarConeccion/:Id_Usuario',sumarConeccion); // sumar una coneccion a un usuario

router.put('/GM_API/Usuario/RestarConeccion/:Id_Usuario',restarConeccion); // restar una coneccion a un usuario

router.put('/GM_API/Usuario/ActualizacionInteraccion/:Id_Usuario',ActualizarInteraccion); // actualizar la ultima interaccion

router.get('/GM_API/Usuario/ComprobacionUsuario',comprobacion); // comprobar ingreso de un usuario

export default router