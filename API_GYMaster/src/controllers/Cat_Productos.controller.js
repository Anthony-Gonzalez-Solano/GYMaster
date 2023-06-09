import {conectar, sql, queries} from "../database";
import {ValidarDatos} from "../rules/Validaciones";

export const insertar = async (req,res) => {
    const {Nombre,Id_Gym} = req.body // parametros necesarios
    const val = ValidarDatos([Nombre,Id_Gym]); // confirmamos que los datos estan bien
    if(val != 'todo bien'){
        return res.status(400).json({msg: val}) // en caso de que no esten bien, retornamos un error
    }

    try {
        const pool = await conectar(); // coneccion a base de datos
        await pool.request()
        .input("param_Nombre",sql.VarChar,Nombre)// introducimos los parametros necesarios para el procedimiento almacenado
        .input("param_Id_Gym",sql.Int,Id_Gym)
        .query(queries.Cat_Productos.Insertar)
        //seleccionamos el proceso almacenado del archivo querys.js
        //utilizando la nomenclatura de queries.[Tabla].[Metodo]
    
        res.json({Nombre,Id_Gym});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}
// repetimos lo anterior pero cambiando el metodo, parametros y procedimiento almacenado usado
export const modificar = async (req, res) => {
    const {Nombre} = req.body
    const {Id_Cat} = req.params
    const val = ValidarDatos([Nombre]);
    if(val != 'todo bien'){
        return res.status(400).json({msg: val})
    }
    try {
        const pool = await conectar();
        const result = await pool.request()
        .input('param_Nombre',sql.VarChar,Nombre)
        .input('param_Id',sql.Int,Id_Cat)
        .query(queries.Cat_Productos.Modificar)
        res.json({Nombre});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }

}