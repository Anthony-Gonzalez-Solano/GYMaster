import {conectar, sql, queries} from "../database";
import {ValidarDatos} from "../rules/Validaciones";

export const insertar = async (req,res) => {
    const {Id_Usuario,Accion,Fecha} = req.body // parametros necesarios

    const val = ValidarDatos([Id_Usuario,Accion,Fecha]); // confirmamos que los datos estan bien
    if(val != 'todo bien'){
        return res.status(400).json({msg: val}) // en caso de que no esten bien, retornamos un error
    }
    try {
        const pool = await conectar(); // coneccion a base de datos
        await pool.request()
        .input("param_Id_Usuario",sql.Int,Id_Usuario)// introducimos los parametros necesarios para el procedimiento almacenado
        .input("param_Accion",sql.VarChar,Accion)
        .input("param_Fecha",sql.DateTime2,Fecha)
        .query(queries.Historial.Insertar)
        //seleccionamos el proceso almacenado del archivo querys.js
        //utilizando la nomenclatura de queries.[Tabla].[Metodo]
    
        res.json({Id_Usuario,Accion,Fecha});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}