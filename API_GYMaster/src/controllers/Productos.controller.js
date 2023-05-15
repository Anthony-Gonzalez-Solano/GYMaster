import {conectar, sql, queries} from "../database";
import {ValidarDatos} from "../rules/Validaciones";

export const insertar = async (req,res) => {
    const {Nombre,Marca,Id_Moneda,Id_Gym,Existencias,Precio,Activo} = req.body // parametros necesarios
    const val = ValidarDatos([Nombre,Marca,Id_Moneda,Id_Gym,Existencias,Precio,Activo]); // confirmamos que los datos estan bien
    if(val != 'todo bien'){
        return res.status(400).json({msg: val}) // en caso de que no esten bien, retornamos un error
    }
    try {
        const pool = await conectar(); // coneccion a base de datos
        await pool.request()
        .input("param_Nombre",sql.VarChar,Nombre)// introducimos los parametros necesarios para el procedimiento almacenado
        .input("param_Marca",sql.VarChar,Marca)
        .input("param_Id_Moneda",sql.Int,Id_Moneda)
        .input("param_Id_Gym",sql.Int,Id_Gym)
        .input("param_Existencias",sql.Int,Existencias)
        .input("param_Precio",sql.Numeric(10,2),Precio)
        .input("param_Activo",sql.Bit,Activo)
        .query(queries.Productos.Insertar)
        //seleccionamos el proceso almacenado del archivo querys.js
        //utilizando la nomenclatura de queries.[Tabla].[Metodo]
    
        res.json({Nombre,Marca,Id_Moneda,Id_Gym,Existencias,Precio,Activo});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}
// repetimos lo anterior pero cambiando el metodo, parametros y procedimiento almacenado usado
export const modificar = async (req, res) => {
    const {Id_Producto} = req.params
    const {Nombre,Marca,Id_Moneda,Existencias,Precio} = req.body
    const val = ValidarDatos([Nombre,Marca,Id_Moneda,Existencias,Precio]);
    if(val != 'todo bien'){
        return res.status(400).json({msg: val})
    }

    try {
        const pool = await conectar();
        const result = await pool.request()
        .input("param_Nombre",sql.VarChar,Nombre)
        .input("param_Marca",sql.VarChar,Marca)
        .input("param_Id_Moneda",sql.Int,Id_Moneda)
        .input("param_Existencias",sql.Int,Existencias)
        .input("param_Precio",sql.Numeric(10,2),Precio)
        .input('param_Id',sql.Int,Id_Producto)
        .query(queries.Productos.Modificar)
        res.json({Id_Producto,Nombre,Marca,Id_Moneda,Existencias,Precio});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }

}