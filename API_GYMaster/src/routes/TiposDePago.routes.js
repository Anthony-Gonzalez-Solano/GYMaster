import { Router } from 'express'
import { buscar,buscarPorId } from '../controllers/ConsultasGenerales.Controller'

const router = Router()

router.get('/GM_API/Tipos_Pagos/Buscar',buscar); // obtener todos los Tipos_Pagoss

router.get('/GM_API/Tipos_Pagos/BuscarID/:param_Id',buscarPorId); // obtener un Tipos_Pagos por id

export default router

