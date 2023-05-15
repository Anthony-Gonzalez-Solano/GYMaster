import {conectar, sql, queries} from "../database";
import {ValidarDatos} from "../rules/Validaciones";

export const insertar = async (req,res) => {
    const {Id_Gym,Id_Moneda,Nombre,Plazo_Dias,Costo,Activo} = req.body // parametros necesarios
    const val = ValidarDatos([Id_Gym,Id_Moneda,Nombre,Plazo_Dias,Costo,Activo]); // confirmamos que los datos estan bien
    if(val != 'todo bien'){
        return res.status(400).json({msg: val}) // en caso de que no esten bien, retornamos un error
    }
    try {
        const pool = await conectar(); // coneccion a base de datos
        await pool.request()
        .input("param_Id_Gym",sql.Int,Id_Gym)// introducimos los parametros necesarios para el procedimiento almacenado
        .input("param_Id_Moneda",sql.Int,Id_Moneda)
        .input("param_Nombre",sql.VarChar,Nombre)
        .input("param_Plazo_Dias",sql.Int,Plazo_Dias)
        .input("param_Costo",sql.Numeric(10,2),Costo)
        .input("param_Activo",sql.Int,Activo)
        .query(queries.Cuotas.Insertar)
        //seleccionamos el proceso almacenado del archivo querys.js
        //utilizando la nomenclatura de queries.[Tabla].[Metodo]
    
        res.json({Id_Gym,Id_Moneda,Nombre,Plazo_Dias,Costo,Activo});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}
// repetimos lo anterior pero cambiando el metodo, parametros y procedimiento almacenado usado
export const modificar = async (req, res) => {
    const {Id_Moneda,Nombre,Plazo_Dias,Costo} = req.body
    const {Id_Cuota} = req.params
    const val = ValidarDatos([Id_Moneda,Nombre,Plazo_Dias,Costo]);
    if(val != 'todo bien'){
        return res.status(400).json({msg: val})
    }
    try {
        const pool = await conectar();
        const result = await pool.request()
        .input("param_Id_Moneda",sql.Int,Id_Moneda)
        .input("param_Nombre",sql.VarChar,Nombre)
        .input("param_Plazo_Dias",sql.Int,Plazo_Dias)
        .input("param_Costo",sql.Numeric(10,2),Costo)
        .input('param_Id',sql.Int,Id_Cuota)
        .query(queries.Cuotas.Modificar)
        res.json({Id_Cuota,Id_Moneda,Nombre,Plazo_Dias,Costo});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }

}