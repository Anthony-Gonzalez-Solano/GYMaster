import {conectar, sql, queries} from "../database";
import {ValidarDatos} from "../rules/Validaciones";

export const insertar = async (req,res) => {
    const {Monto,Id_Moneda,Id_Gym,Id_Cliente,Id_TPago,Fecha} = req.body // parametros necesarios
    const val = ValidarDatos([Monto,Id_Moneda,Id_Gym,Id_Cliente,Id_TPago,Fecha]); // confirmamos que los datos estan bien
    if(val != 'todo bien'){
        return res.status(400).json({msg: val}) // en caso de que no esten bien, retornamos un error
    }
    try {
        const pool = await conectar(); // coneccion a base de datos
        await pool.request()
        .input("param_Monto",sql.Numeric(10,2),Monto)// introducimos los parametros necesarios para el procedimiento almacenado
        .input("param_Id_Moneda",sql.Int,Id_Moneda)
        .input("param_Id_Gym",sql.Int,Id_Gym)
        .input("param_Id_Cliente",sql.Int,Id_Cliente)
        .input("param_Id_TPago",sql.Int,Id_TPago)
        .input("param_Fecha",sql.DateTime2,Fecha)
        .query(queries.Ventas.Insertar)
        //seleccionamos el proceso almacenado del archivo querys.js
        //utilizando la nomenclatura de queries.[Tabla].[Metodo]
    
        res.json({Monto,Id_Moneda,Id_Gym,Id_Cliente,Id_TPago,Fecha});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}
// repetimos lo anterior pero cambiando el metodo, parametros y procedimiento almacenado usado
export const modificar = async (req, res) => {
    const {Id_Venta} = req.params
    const {Monto,Id_Moneda,Id_Gym,Id_Cliente,Id_TPago,Fecha} = req.body
    const val = ValidarDatos([Monto,Id_Moneda,Id_Gym,Id_Cliente,Id_TPago,Fecha]);
    if(val != 'todo bien'){
        return res.status(400).json({msg: val})
    }
    try {
        const pool = await conectar();
        await pool.request()
        .input("param_Monto",sql.Numeric(10,2),Monto)
        .input("param_Id_Moneda",sql.Int,Id_Moneda)
        .input("param_Id_Gym",sql.Int,Id_Gym)
        .input("param_Id_Cliente",sql.Int,Id_Cliente)
        .input("param_Id_TPago",sql.Int,Id_TPago)
        .input("param_Fecha",sql.DateTime2,Fecha)
        .input('param_Id',sql.Int,Id_Venta)
        .query(queries.Ventas.Modificar)
        res.json({Id_Venta,Monto,Id_Moneda,Id_Gym,Id_Cliente,Id_TPago,Fecha});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }

}