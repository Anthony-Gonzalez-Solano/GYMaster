import {conectar, sql, queries} from "../database";
import {ValidarDatos} from "../rules/Validaciones";

export const insertar = async (req,res) => {
    const {Id_Rutina,Dia_Nombre,Ejercicio,Series,Repeticiones} = req.body // parametros necesarios
    const val = ValidarDatos([Id_Rutina,Dia_Nombre,Ejercicio,Series,Repeticiones]); // confirmamos que los datos estan bien
    if(val != 'todo bien'){
        return res.status(400).json({msg: val}) // en caso de que no esten bien, retornamos un error
    }

    try {
        const pool = await conectar(); // coneccion a base de datos
        await pool.request()
        .input("param_Id_Rutina",sql.Int,Id_Rutina)// introducimos los parametros necesarios para el procedimiento almacenado
        .input("param_Dia_Nombre",sql.VarChar,Dia_Nombre)
        .input("param_Ejercicio",sql.VarChar,Ejercicio)
        .input("param_Series",sql.Int,Series)
        .input("param_Repeticiones",sql.VarChar,Repeticiones)
        .query(queries.Ejercicios.Insertar)
        //seleccionamos el proceso almacenado del archivo querys.js
        //utilizando la nomenclatura de queries.[Tabla].[Metodo]
    
        res.json({Id_Rutina,Dia_Nombre,Ejercicio,Series,Repeticiones});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}
// repetimos lo anterior pero cambiando el metodo, parametros y procedimiento almacenado usado
export const modificar = async (req, res) => {
    const {Dia_Nombre,Ejercicio,Series,Repeticiones} = req.body
    const {Id_Ejercicio} = req.params
    const val = ValidarDatos([Dia_Nombre,Ejercicio,Series,Repeticiones]);
    if(val != 'todo bien'){
        return res.status(400).json({msg: val})
    }

    try {
        const pool = await conectar();
        const result = await pool.request()
        .input("param_Dia_Nombre",sql.VarChar,Dia_Nombre)
        .input("param_Ejercicio",sql.VarChar,Ejercicio)
        .input("param_Series",sql.Int,Series)
        .input("param_Repeticiones",sql.VarChar,Repeticiones)
        .input('param_Id',sql.Int,Id_Ejercicio)
        .query(queries.Ejercicios.Modificar)
        res.json({Id_Ejercicio,Dia_Nombre,Ejercicio,Series,Repeticiones});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }

}