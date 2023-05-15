import {conectar, sql, queries} from "../database";
import {ValidarDatos} from "../rules/Validaciones";

export const insertar = async (req,res) => {
    const {Id_Gym,Titulo,Mensaje} = req.body // parametros necesarios
    const val = ValidarDatos([Id_Gym,Titulo,Mensaje]); // confirmamos que los datos estan bien
    if(val != 'todo bien'){
        return res.status(400).json({msg: val}) // en caso de que no esten bien, retornamos un error
    }
    try {
        const pool = await conectar(); // coneccion a base de datos
        await pool.request()
        .input("param_Id_Gym",sql.Int,Id_Gym)// introducimos los parametros necesarios para el procedimiento almacenado
        .input("param_Titulo",sql.VarChar,Titulo)
        .input("param_Mensaje",sql.VarChar,Mensaje)
        .query(queries.Sugerencia.Insertar)
        //seleccionamos el proceso almacenado del archivo querys.js
        //utilizando la nomenclatura de queries.[Tabla].[Metodo]
    
        res.json({Id_Gym,Titulo,Mensaje});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}