import sql from 'mssql';
import config from '../config'

//coneccion a base de datos
const dbSettings = {
    user: config.DBuser, //nombre de usuario
    password: config.DBpassword, // contrasena
    server: config.DBserver, //ip de servidor
    database: config.DBdatabase, // nombre de la base de datos
    options: {
        encrypt: true,
        trustServerCertificate: true,
    }
};
export async function conectar(){ // funcion para no realizar los comandos de coneccion en cada archivo
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error)
    }
}

export {sql};