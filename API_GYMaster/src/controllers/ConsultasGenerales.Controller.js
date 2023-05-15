import {conectar, sql, queries} from "../database";

/**
 * buscar todo los elementos 
 * @param {*} req 
 * @param {json} res 
 */
export const buscar = async (req,res) => { // Consulta para buscar todos los elementos de cualquier tabla
    let arrayURL = req.url.split('/'); //realizamos un split de la URL
    try {
        const pool = await conectar(); //coneccion a base de datos
        const result = await pool.request()
        .query(queries[arrayURL[2]][arrayURL[3]]);
        res.json(result.recordset);
        //los elementos 2 y 3 del arrayURL correcponden a la divicion realizada en el archivo query.js
        //esto para que cada link de la api tenga una forma muy distinta y sea capas de reutilizar este codigo
        //en muyltiples archivos, ya que las consultas de los elemntos de la base de datos son todas de la misma
        //forma, con esto no es necesario repetir el metodo Buscar en cada controlador
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}
/**
 * buscar un elemento por ID , tanto del mismo objeto como ids de gyms y clientes. Solo devolvera los Activos
 * @param {*} req 
 * @param {json} res 
 */
export const buscarPorId = async (req, res) => { // 
    const {param_Id} = req.params
    let arrayURL = req.url.split('/');
    try {
        const pool = await conectar();
        const result = await pool.request()
        .input("param_Id",param_Id)
        .query(queries[arrayURL[2]][arrayURL[3]])
        res.json(result.recordset);
        //por las mismas razones del metodo buscar, BuscarporId es igual en todas las consultas por lo que
        //haciendo esto reutilizaremos codigo
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}
/**
 * Metodo tanto para eliminar como activar y desactivar un elemento por meido de ID
 * @param {*} req 
 * @param {json} res 
 */
export const eliminar_activoNoActivo = async (req, res) => {
    const {param_Id} = req.params
    let arrayURL = req.url.split('/');
    try {
        const pool = await conectar();
        const result = await pool.request()
        .input("param_Id",param_Id)
        .query(queries[arrayURL[2]][arrayURL[3]])
        res.status(204);
        //misma razon de los 2 anteriores en este metodo
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}
// tener en cuenta que esto es posible ya que todos los procesos alamacenados Buscar, BuscarPorId, Eliminar y del estado
// de la Base de Datos, resiven un param_Id como parametro, a exepcion del Buscar que no necesita nada, en caso de que
// alguno de esos procesos almacenado no resiva param_Id no se podra reutilizar el codigo 