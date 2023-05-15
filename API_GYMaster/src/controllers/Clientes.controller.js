import {conectar, sql, queries} from "../database";
import {ValidarDatos} from "../rules/Validaciones";

export const insertar = async (req,res) => {
    const {Id_Gym,Id_Cuota,Cedula,Nombre,Apellidos,Fecha_Nacimiento,Activo} = req.body // parametros necesarios
    const val = ValidarDatos([Id_Gym,Id_Cuota,Cedula,Nombre,Apellidos,Fecha_Nacimiento,Activo]); // confirmamos que los datos estan bien
    if(val != 'todo bien'){
        return res.status(400).json({msg: val}) // en caso de que no esten bien, retornamos un error
    }
    try {
        const pool = await conectar(); // coneccion a base de datos
        await pool.request()
        .input("param_Id_Gym",sql.Int,Id_Gym)// introducimos los parametros necesarios para el procedimiento almacenado
        .input("param_Id_Cuota",sql.Int,Id_Cuota)
        .input("param_Cedula",sql.VarChar,Cedula)
        .input("param_Nombre",sql.VarChar,Nombre)
        .input("param_Apellidos",sql.VarChar,Apellidos)
        .input("param_Fecha_Nacimiento",sql.DateTime2,Fecha_Nacimiento)
        .input("param_Activo",sql.Int,Activo)
        .query(queries.Cliente.Insertar)
        //seleccionamos el proceso almacenado del archivo querys.js
        //utilizando la nomenclatura de queries.[Tabla].[Metodo]
    
        res.json({Id_Gym,Id_Cuota,Cedula,Nombre,Apellidos,Fecha_Nacimiento,Activo});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}
// repetimos lo anterior pero cambiando el metodo, parametros y procedimiento almacenado usado
export const modificar = async (req, res) => {
    const {Id_Cliente} = req.params
    const {Id_Cuota,Cedula,Nombre,Apellidos,Fecha_Nacimiento} = req.body
    const val = ValidarDatos([Id_Cuota,Cedula,Nombre,Apellidos,Fecha_Nacimiento]);
    if(val != 'todo bien'){
        return res.status(400).json({msg: val})
    }

    try {
        const pool = await conectar();
        const result = await pool.request()
        .input("param_Id_Cuota",sql.Int,Id_Cuota)
        .input("param_Cedula",sql.VarChar,Cedula)
        .input("param_Nombre",sql.VarChar,Nombre)
        .input("param_Apellidos",sql.VarChar,Apellidos)
        .input("param_Fecha_Nacimiento",sql.DateTime2,Fecha_Nacimiento)
        .input('param_Id',sql.Int,Id_Cliente)
        .query(queries.Cliente.Modificar)
        res.json({Id_Cuota,Cedula,Nombre,Apellidos,Fecha_Nacimiento});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }

}