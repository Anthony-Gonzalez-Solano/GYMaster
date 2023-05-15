import {conectar, sql, queries} from "../database";
import {ValidarDatos} from "../rules/Validaciones";

export const insertar = async (req,res) => {
    const {Id_Cliente,Fecha} = req.body // parametros necesarios
    const val = ValidarDatos([Id_Cliente,Fecha]); // confirmamos que los datos estan bien
    if(val != 'todo bien'){
        return res.status(400).json({msg: val}) // en caso de que no esten bien, retornamos un error
    }
    try {
        const pool = await conectar(); // coneccion a base de datos
        await pool.request()
        .input("param_Id_Cliente",sql.Int,Id_Cliente)// introducimos los parametros necesarios para el procedimiento almacenado
        .input("param_Fecha",sql.DateTime2,Fecha)
        .query(queries.Rutinas.Insertar)
        //seleccionamos el proceso almacenado del archivo querys.js
        //utilizando la nomenclatura de queries.[Tabla].[Metodo]
    
        res.json({Id_Cliente,Fecha});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}
// repetimos lo anterior pero cambiando el metodo, parametros y procedimiento almacenado usado
export const modificar = async (req, res) => {
    const {Id_Cliente,Fecha} = req.body
    const {Id_Rutina} = req.params
    const val = ValidarDatos([Id_Cliente,Fecha]);
    if(val != 'todo bien'){
        return res.status(400).json({msg: val})
    }

    try {
        const pool = await conectar();
        const result = await pool.request()
        .input("param_Id_Cliente",sql.Int,Id_Cliente)
        .input("param_Fecha",sql.DateTime2,Fecha)
        .input('param_Id',sql.Int,Id_Rutina)
        .query(queries.Rutinas.Modificar)
        res.json({Id_Rutina,Id_Cliente,Fecha});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }

}