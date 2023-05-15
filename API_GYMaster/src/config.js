import { config } from "dotenv"
config();

export default{
    port: process.env.PORT || 3000,
    DBuser: process.env.DB_USER || '',
    DBpassword: process.env.DB_PASSWORD || '',
    DBserver: process.env.DB_SERVER || '',
    DBdatabase: process.env.DB_DATABASE || ''
}

/*
Es necesario crear un archivo de variables de entorno llamado .env
Ese documento debe contener exactamente lo siguiente

PORT = [NUMERO DE PUERTO]
DB_USER = [Nombre del Login para la Base de Datos]
DB_PASSWORD = [Contrasena del Login para la Base de Datos]
DB_SERVER = [Ip de Servidor de la Base de Datos]
DB_DATABASE = [Nombre de Base de Datos]


*/