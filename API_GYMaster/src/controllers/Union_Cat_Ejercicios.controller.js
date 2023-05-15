import {conectar, sql, queries} from "../database";
import {ValidarDatos} from "../rules/Validaciones";

export const insertar = async (req,res) => {
    const {Id_Ejercicio,Id_Cat_Ejercicio} = req.body // parametros necesarios
    const val = ValidarDatos([Id_Ejercicio,Id_Cat_Ejercicio]); // confirmamos que los datos estan bien
    if(val != 'todo bien'){
        return res.status(400).json({msg: val}) // en caso de que no esten bien, retornamos un error
    }

    try {
        const pool = await conectar(); // coneccion a base de datos
        await pool.request()
        .input("param_Id_Ejercicio",sql.Int,Id_Ejercicio)// introducimos los parametros necesarios para el procedimiento almacenado
        .input("param_Id_Cat_Ejercicio",sql.Int,Id_Cat_Ejercicio)
        .query(queries.Union_Cat_Ejercicios.Insertar)
        //seleccionamos el proceso almacenado del archivo querys.js
        //utilizando la nomenclatura de queries.[Tabla].[Metodo]
    
        res.json({Id_Ejercicio,Id_Cat_Ejercicio});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}
// repetimos lo anterior pero cambiando el metodo, parametros y procedimiento almacenado usado
export const modificar = async (req, res) => {
    const {Id_param1,Id_param2} = req.params
    const {Id_Ejercicio,Id_Cat_Ejercicio} = req.body
    const val = ValidarDatos([Id_Ejercicio,Id_Cat_Ejercicio]);
    if(val != 'todo bien'){
        return res.status(400).json({msg: val})
    }

    try {
        const pool = await conectar();
        const result = await pool.request()
        .input("param_Id_Ejercicio",sql.Int,Id_Ejercicio)
        .input("param_Id_Cat_Ejercicio",sql.Int,Id_Cat_Ejercicio)
        .input('param_Id1',sql.Int,Id_param1)
        .input('param_Id2',sql.Int,Id_param2)
        .query(queries.Union_Cat_Ejercicios.Modificar)
        res.json({Id_Ejercicio,Id_Cat_Ejercicio});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }

}
//no podemos usar el metodo Eliminar_ActivoNoActivo del archivo ConsultasGenerales.controller.js ya que 
//este metodo debe resibir parametros diferentes
export const eliminar = async (req, res) => {
    const {Id_param1,Id_param2} = req.params

    try{
        const pool = await conectar();
        const result = await pool.request()
        .input('param_Id1',sql.Int,Id_param1)
        .input('param_Id2',sql.Int,Id_param2)
        .query(queries.Union_Cat_Ejercicios.Eliminar)
        res.status(204);
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}