import {conectar, sql, queries} from "../database";
import {ValidarDatos} from "../rules/Validaciones";

export const insertar = async (req,res) => {
    const {Id_Producto,Id_Cat_Producto} = req.body // parametros necesarios
    const val = ValidarDatos([Id_Producto,Id_Cat_Producto]); // confirmamos que los datos estan bien
    if(val != 'todo bien'){
        return res.status(400).json({msg: val}) // en caso de que no esten bien, retornamos un error
    }

    try {
        const pool = await conectar(); // coneccion a base de datos
        await pool.request()
        .input("param_Id_Producto",sql.Int,Id_Producto)// introducimos los parametros necesarios para el procedimiento almacenado
        .input("param_Id_Cat_Prdocuto",sql.Int,Id_Cat_Producto)
        .query(queries.Union_Cat_Productos.Insertar)
        //seleccionamos el proceso almacenado del archivo querys.js
        //utilizando la nomenclatura de queries.[Tabla].[Metodo]
    
        res.json({Id_Producto,Id_Cat_Producto});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}
// repetimos lo anterior pero cambiando el metodo, parametros y procedimiento almacenado usado
export const modificar = async (req, res) => {
    const {Id_param1,Id_param2} = req.params
    const {Id_Producto,Id_Cat_Producto} = req.body
    const val = ValidarDatos([Id_Producto,Id_Cat_Producto]);
    if(val != 'todo bien'){
        return res.status(400).json({msg: val})
    }

    try {
        const pool = await conectar();
        const result = await pool.request()
        .input("param_Id_Producto",sql.Int,Id_Producto)
        .input("param_Id_Cat_Producto",sql.Int,Id_Cat_Producto)
        .input('param_Id1',sql.Int,Id_param1)
        .input('param_Id2',sql.Int,Id_param2)
        .query(queries.Union_Cat_Productos.Modificar)
        res.json({Id_Producto,Id_Cat_Producto});
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
        .query(queries.Union_Cat_Productos.Eliminar)
        res.status(204);
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}