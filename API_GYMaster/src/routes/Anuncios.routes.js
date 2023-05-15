import { Router } from 'express'
import { buscar,buscarPorId,eliminar_activoNoActivo } from '../controllers/ConsultasGenerales.Controller'
import { insertar,modificar } from "../controllers/Anuncios.controller";

const router = Router()

router.get('/GM_API/Anuncio/Buscar',buscar); // obtener todos los anuncios

router.get('/GM_API/Anuncio/BuscarID/:param_Id',buscarPorId); // obtener un anuncio por id

router.get('/GM_API/Anuncio/BuscarGym/:param_Id',buscarPorId); // obtener un anuncio por gym

router.delete('/GM_API/Anuncio/Eliminar/:param_Id',eliminar_activoNoActivo);// eliminar permanentemente un anuncio

router.delete('/GM_API/Anuncio/ActivoNoActivo/:param_Id',eliminar_activoNoActivo);// desactivar o activar un anuncio

router.post('/GM_API/Anuncio/Insertar',insertar) // insertar un anuncio

router.put('/GM_API/Anuncio/Modificar/:Id_Anuncio',modificar) // modificar un anuncio

export default router