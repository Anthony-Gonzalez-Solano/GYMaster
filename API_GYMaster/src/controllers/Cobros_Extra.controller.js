import {conectar, sql, queries} from "../database";
import {ValidarDatos} from "../rules/Validaciones";

export const insertar = async (req,res) => {
    const {Id_Pago,Id_TPago,Id_Moneda,Monto,Razon} = req.body // parametros necesarios
    const val = ValidarDatos([Id_Pago,Id_TPago,Id_Moneda,Monto,Razon]); // confirmamos que los datos estan bien
    if(val != 'todo bien'){
        return res.status(400).json({msg: val}) // en caso de que no esten bien, retornamos un error
    }
    try {
        const pool = await conectar(); // coneccion a base de datos
        await pool.request()
        .input("param_Id_Pago",sql.Int,Id_Pago)// introducimos los parametros necesarios para el procedimiento almacenado
        .input("param_Id_TPago",sql.Int,Id_TPago)
        .input("param_Id_Moneda",sql.Int,Id_Moneda)
        .input("param_Monto",sql.Numeric(10,2),Monto)
        .input("param_Razon",sql.VarChar,Razon)
        .query(queries.Cobros_Extra.Insertar)
        //seleccionamos el proceso almacenado del archivo querys.js
        //utilizando la nomenclatura de queries.[Tabla].[Metodo]
    
        res.json({Id_Pago,Id_TPago,Id_Moneda,Monto,Razon});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}
// repetimos lo anterior pero cambiando el metodo, parametros y procedimiento almacenado usado
export const modificar = async (req, res) => {
    const {Id_TPago,Id_Moneda,Monto,Razon} = req.body
    const {Id_Extra} = req.params
    const val = ValidarDatos([Id_TPago,Id_Moneda,Monto,Razon]);
    if(val != 'todo bien'){
        return res.status(400).json({msg: val})
    }

    try {
        const pool = await conectar();
        const result = await pool.request()
        .input("param_Id_TPago",sql.Int,Id_TPago)
        .input("param_Id_Moneda",sql.Int,Id_Moneda)
        .input("param_Monto",sql.Numeric(10,2),Monto)
        .input("param_Razon",sql.VarChar,Razon)
        .input('param_Id',sql.Int,Id_Extra)
        .query(queries.Cobros_Extra.Modificar)
        res.json({Id_Extra,Id_TPago,Id_Moneda,Monto,Razon});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }

}