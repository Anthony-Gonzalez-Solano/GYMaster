import {conectar, sql, queries} from "../database";
import {ValidarDatos} from "../rules/Validaciones";

export const insertar = async (req,res) => {
    const {Id_Venta,Id_Producto,Id_Moneda,Cantidad,Precio} = req.body // parametros necesarios
    const val = ValidarDatos([Id_Venta,Id_Producto,Id_Moneda,Cantidad,Precio]); // confirmamos que los datos estan bien
    if(val != 'todo bien'){
        return res.status(400).json({msg: val}) // en caso de que no esten bien, retornamos un error
    }
    try {
        const pool = await conectar(); // coneccion a base de datos
        await pool.request()
        .input("param_Id_Venta",sql.Int,Id_Venta)// introducimos los parametros necesarios para el procedimiento almacenado
        .input("param_Id_Producto",sql.Int,Id_Producto)
        .input("param_Id_Moneda",sql.Int,Id_Moneda)
        .input("param_Cantidad",sql.Int,Cantidad)
        .input("param_Precio",sql.Numeric(10,2),Precio)
        .query(queries.Detalles_Venta.Insertar)
        //seleccionamos el proceso almacenado del archivo querys.js
        //utilizando la nomenclatura de queries.[Tabla].[Metodo]
    
        res.json({Id_Venta,Id_Producto,Id_Moneda,Cantidad,Precio});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}
// repetimos lo anterior pero cambiando el metodo, parametros y procedimiento almacenado usado
export const modificar = async (req, res) => {
    const {Id_Detalle_Venta} = req.params
    const {Id_Producto,Id_Moneda,Cantidad,Precio} = req.body
    const val = ValidarDatos([Id_Producto,Id_Moneda,Cantidad,Precio]);
    if(val != 'todo bien'){
        return res.status(400).json({msg: val})
    }
    try {
        const pool = await conectar();
        await pool.request()
        .input("param_Id_Producto",sql.Int,Id_Producto)
        .input("param_Id_Moneda",sql.Int,Id_Moneda)
        .input("param_Cantidad",sql.Int,Cantidad)
        .input("param_Precio",sql.Numeric(10,2),Precio)
        .input('param_Id',sql.Int,Id_Detalle_Venta)
        .query(queries.Detalles_Venta.Modificar)
        res.json({Id_Detalle_Venta,Id_Producto,Id_Moneda,Cantidad,Precio});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }

}