import { Router } from 'express'
import { buscar,buscarPorId } from '../controllers/ConsultasGenerales.Controller'

const router = Router()

router.get('/GM_API/Moneda/Buscar',buscar); // obtener todos los Monedas

router.get('/GM_API/Moneda/BuscarID/:param_Id',buscarPorId); // obtener un Moneda por id

export default router

