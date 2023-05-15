import {conectar, sql, queries} from "../database";
import {ValidarDatos} from "../rules/Validaciones";

export const insertar = async (req,res) => {
    const {Id_Gym,Titulo,Mensaje,Fecha_Inicio,Fecha_Final,Activo} = req.body // parametros necesarios
    const val = ValidarDatos([Id_Gym,Titulo,Mensaje,Fecha_Inicio,Fecha_Final,Activo]); // confirmamos que los datos estan bien
    if(val != 'todo bien'){
        return res.status(400).json({msg: val}) // en caso de que no esten bien, retornamos un error
    }
    try {
        const pool = await conectar(); // coneccion a base de datos
        await pool.request()
        .input("param_Id_Gym",sql.VarChar,Id_Gym)// introducimos los parametros necesarios para el procedimiento almacenado
        .input("param_Titulo",sql.VarChar,Titulo)
        .input("param_Mensaje",sql.VarChar,Mensaje)
        .input("param_Fecha_Inicio",sql.DateTime2,Fecha_Inicio)
        .input("param_Fecha_Final",sql.DateTime2,Fecha_Final)
        .input("param_Activo",sql.Bit,Activo)
        .query(queries.Anuncio.Insertar)
        //seleccionamos el proceso almacenado del archivo querys.js
        //utilizando la nomenclatura de queries.[Tabla].[Metodo]
        
        res.json({Id_Gym,Titulo,Mensaje,Fecha_Inicio,Fecha_Final,Activo});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}

// repetimos lo anterior pero cambiando el metodo, parametros y procedimiento almacenado usado
export const modificar = async (req, res) => {
    const {Id_Gym,Titulo,Mensaje,Fecha_Inicio,Fecha_Final} = req.body
    const {Id_Anuncio} = req.params
    const val = ValidarDatos([Id_Gym,Titulo,Mensaje,Fecha_Inicio,Fecha_Final]);
    if(val != 'todo bien'){
        return res.status(400).json({msg: val})
    }

    try {
        const pool = await conectar();
        const result = await pool.request()
        .input("param_Id_Gym",sql.VarChar,Id_Gym)
        .input("param_Titulo",sql.VarChar,Titulo)
        .input("param_Mensaje",sql.VarChar,Mensaje)
        .input("param_Fecha_Inicio",sql.DateTime2,Fecha_Inicio)
        .input("param_Fecha_Final",sql.DateTime2,Fecha_Final)
        .input('param_Id',sql.Int,Id_Anuncio)
        .query(queries.Anuncio.Modificar)
        res.json({Id_Gym,Titulo,Mensaje,Fecha_Inicio,Fecha_Final,Activo});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }

}