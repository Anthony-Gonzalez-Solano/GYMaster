import {conectar, sql, queries} from "../database";
import {ValidarDatos} from "../rules/Validaciones";

export const insertar = async (req,res) => {
    const {Nombre,Contrasena,Id_Gym,Perm_Articulos,Perm_Ejercicios,Perm_Presupuesto,Perm_Admin,UltimaInteraccion,Conecciones,Activo} = req.body
     // parametros necesarios
    const val = ValidarDatos([Nombre,Contrasena,Id_Gym,Perm_Articulos,Perm_Ejercicios,Perm_Presupuesto,Perm_Admin,UltimaInteraccion,Conecciones,Activo]);
     // confirmamos que los datos estan bien
    if(val != 'todo bien'){
        return res.status(400).json({msg: val}) // en caso de que no esten bien, retornamos un error
    }
    try {
        const pool = await conectar(); // coneccion a base de datos
        await pool.request()
        .input("param_Nombre",sql.VarChar,Nombre)// introducimos los parametros necesarios para el procedimiento almacenado
        .input("param_Contrasena",sql.VarChar,Contrasena)
        .input("param_Id_Gym",sql.Int,Id_Gym)
        .input("param_Perm_Articulos",sql.Bit,Perm_Articulos)
        .input("param_Perm_Ejercicios",sql.Bit,Perm_Ejercicios)
        .input("param_Perm_Presupuesto",sql.Bit,Perm_Presupuesto)
        .input("param_Perm_Admin",sql.Bit,Perm_Admin)
        .input("param_UltimaInteraccion",sql.DateTime2,UltimaInteraccion)
        .input("param_Conecciones",sql.Int,Conecciones)
        .input("param_Activo",sql.Bit,Activo)
        .query(queries.Usuario.Insertar)
        //seleccionamos el proceso almacenado del archivo querys.js
        //utilizando la nomenclatura de queries.[Tabla].[Metodo]
    
        res.json({Nombre,Id_Gym,Perm_Articulos,Perm_Ejercicios,Perm_Presupuesto,Perm_Admin,UltimaInteraccion,Conecciones,Activo});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}
// repetimos lo anterior pero cambiando el metodo, parametros y procedimiento almacenado usado
export const modificar = async (req, res) => {
    const {Nombre,Contrasena,Id_Gym,Perm_Articulos,Perm_Ejercicios,Perm_Presupuesto,Perm_Admin} = req.body
    const {Id_Usuario} = req.params
    const val = ValidarDatos([Nombre,Contrasena,Id_Gym,Perm_Articulos,Perm_Ejercicios,Perm_Presupuesto,Perm_Admin]);
    if(val != 'todo bien'){
        return res.status(400).json({msg: val})
    }

    try {
        const pool = await conectar();
        const result = await pool.request()
        .input("param_Nombre",sql.VarChar,Nombre)
        .input("param_Contrasena",sql.VarChar,Contrasena)
        .input("param_Id_Gym",sql.Int,Id_Gym)
        .input("param_Perm_Articulos",sql.Bit,Perm_Articulos)
        .input("param_Perm_Ejercicios",sql.Bit,Perm_Ejercicios)
        .input("param_Perm_Presupuesto",sql.Bit,Perm_Presupuesto)
        .input("param_Perm_Admin",sql.Bit,Perm_Admin)
        .input('param_Id',sql.Int,Id_Usuario)
        .query(queries.Usuario.Modificar)
        res.json({Nombre,Id_Gym,Perm_Articulos,Perm_Ejercicios,Perm_Presupuesto,Perm_Admin});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}
//usando la misma estructura creamos un metodo que aumentara el valor de "Conecciones" de un usuario
export const sumarConeccion = async (req, res) => {
    const {Id_Usuario} = req.params
    try {
        const pool = await conectar();
        const result = await pool.request()
        .input("param_Id",Id_Usuario)
        .query(queries.Usuario.SumarConeccion)
        res.status(204);
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}
//usando la misma estructura creamos un metodo que disminuira el valor de "Conecciones" de un usuario
export const restarConeccion = async (req, res) => {
    const {Id_Usuario} = req.params
    try {
        const pool = await conectar();
        const result = await pool.request()
        .input("param_Id",Id_Usuario)
        .query(queries.Usuario.RestarConeccion)
        res.status(204);
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}
//creacion un metodo donde confirmaremos que un nombre de usuario y contrasena son correctos y existentes enla base de datos
export const comprobacion = async (req, res) => {
    const {Nombre,Contrasena} = req.body
    const val = ValidarDatos([Nombre,Contrasena]);
    if(val != 'todo bien'){
        return res.status(400).json({msg: val})
    }
    if(Nombre.search("'") > -1 | Contrasena.search("'") > -1 | Nombre.search('"') > -1 | Contrasena.search('"') > -1){
        return res.status(400).json({msg: 'Request Denied: Intento de Inyeccion SQL'})
    }
    try {
        const pool = await conectar();
        const result = await pool.request()
        .input("param_Nombre",sql.VarChar,Nombre)
        .input("param_Contrasena",sql.VarChar,Contrasena)
        .query(queries.Usuario.ComprobacionUsuario)
        res.json(result.recordset);
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}
//creamos un metodo que actualiza la ultima interracion de un usuario
export const ActualizarInteraccion = async (req, res) => {
    const {UltimaInteraccion} = req.body
    const {Id_Usuario} = req.params
    const val = ValidarDatos([UltimaInteraccion]);
    if(val != 'todo bien'){
        return res.status(400).json({msg: val})
    }
    try {
        const pool = await conectar();
        const result = await pool.request()
        .input("param_ultimaInteraccion",sql.VarChar,UltimaInteraccion)
        .input('param_Id',sql.Int,Id_Usuario)
        .query(queries.Usuario.ActualizacionInteraccion)
        res.json({UltimaInteraccion});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}