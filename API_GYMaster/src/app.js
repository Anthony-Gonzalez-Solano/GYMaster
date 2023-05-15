import express from "express";
import config from "./config";

import GymsRoutes from "./routes/Gyms.routes";
import UsuariosRoutes from "./routes/Usuarios.routes"
import AnunciosRoutes from "./routes/Anuncios.routes"
import SugerenciasRoutes from "./routes/Sugerencias.routes"
import Cat_EjercicioRoutes from "./routes/Cat_Ejersisio.routes"
import Cat_ProductoRoutes from "./routes/Cat_Productos.routes"
import Tipos_PagosRoutes from "./routes/TiposDePago.routes"
import MonedaRoutes from "./routes/Moneda.routes"
import CuotasRoutes from "./routes/Cuotas.routes"
import ClientesRoutes from "./routes/Clientes.routes"
import MedidasRoutes from "./routes/Medidas.routes"
import PagosRoutes from "./routes/Pagos.routes"
import ExtrasRoutes from "./routes/Cobros_Extra.routes"
import ProductosRoutes from "./routes/Productos.routes"
import VentasRoutes from "./routes/Ventas.routes"
import Detalles_VentaRoutes from "./routes/Detalles_Venta.routes"
import RutinasRoutes from "./routes/Rutinas.routes"
import EjercicioRoutes from "./routes/Ejercicios.routes"
import Gastos_FijosRoutes from "./routes/Gatos_Fijos.routes"
import Gastos_VariablesRoutes from "./routes/Gastos_Variables.routes"
import UnionEjerciciosRoutes from "./routes/Union_Cat_Ejercicios.routes"
import UnionProductosRoutes from "./routes/Union_Cat_Productos.routes"
import Historial from "./routes/Historial.routes"

const app = express()

//settings
app.set('port', config.port);

//middelwares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(GymsRoutes);
app.use(UsuariosRoutes);
app.use(AnunciosRoutes);
app.use(SugerenciasRoutes);
app.use(Cat_EjercicioRoutes);
app.use(Cat_ProductoRoutes);
app.use(Tipos_PagosRoutes);
app.use(MonedaRoutes);
app.use(CuotasRoutes);
app.use(ClientesRoutes);
app.use(MedidasRoutes);
app.use(PagosRoutes);
app.use(ExtrasRoutes);
app.use(ProductosRoutes);
app.use(VentasRoutes);
app.use(Detalles_VentaRoutes);
app.use(RutinasRoutes);
app.use(EjercicioRoutes);
app.use(Gastos_FijosRoutes);
app.use(Gastos_VariablesRoutes);
app.use(UnionEjerciciosRoutes);
app.use(UnionProductosRoutes);
app.use(Historial);

export default app

/* 
Lista de comandos para la instalacion de las librerias necesarias

En el archivo pakage.json se agregarn los tres scrips 
    "test": para correr el proyecto y realizar pruebas
    "build" : Para construir el proyecto de produccion
    "start" : Para ejecutar el proyecto de produccion

*/