import {conectar, sql, queries} from "../database";
import {ValidarDatos} from "../rules/Validaciones";

export const insertar = async (req,res) => {
    const {Id_Cliente,Fecha,Altura,Peso,Med_Cuello,Med_Hombros,Med_Pecho,Med_Cintura,Med_Antebrazo,Med_Muslos,Med_Pantorilla,Med_Biceps,Med_Cadera,Plie_Abdominal,Plie_Suprailiaco,Plie_Bicipal,Plie_Tricipital,Plie_Subescapular,Plie_Cuadricipital,Plie_Peroneal,Papada,Porc_Gras} = req.body
     // parametros necesarios
    const val = ValidarDatos([Id_Cliente,Fecha,Altura,Peso,Med_Cuello,Med_Hombros,Med_Pecho,Med_Cintura,Med_Antebrazo,Med_Muslos,Med_Pantorilla,Med_Biceps,Med_Cadera,Plie_Abdominal,Plie_Suprailiaco,Plie_Bicipal,Plie_Tricipital,Plie_Subescapular,Plie_Cuadricipital,Plie_Peroneal,Papada,Porc_Gras]);
     // confirmamos que los datos estan bien
    if(val != 'todo bien'){
        return res.status(400).json({msg: val}) // en caso de que no esten bien, retornamos un error
    }
    try {
        const pool = await conectar(); // coneccion a base de datos
        await pool.request()
        .input("param_Id_Cliente",sql.Int,Id_Cliente)// introducimos los parametros necesarios para el procedimiento almacenado
        .input("param_Fecha",sql.DateTime2,Fecha)
        .input("param_Altura",sql.Numeric(10,2),Altura)
        .input("param_Peso",sql.Numeric(10,2),Peso)
        .input("param_Med_Cuello",sql.Numeric(10,2),Med_Cuello)
        .input("param_Med_Hombros",sql.Numeric(10,2),Med_Hombros)
        .input("param_Med_Pecho",sql.Numeric(10,2),Med_Pecho)
        .input("param_Med_Cintura",sql.Numeric(10,2),Med_Cintura)
        .input("param_Med_Antebrazo",sql.Numeric(10,2),Med_Antebrazo)
        .input("param_Med_Muslos",sql.Numeric(10,2),Med_Muslos)
        .input("param_Med_Pantorilla",sql.Numeric(10,2),Med_Pantorilla)
        .input("param_Med_Biceps",sql.Numeric(10,2),Med_Biceps)
        .input("param_Med_Cadera",sql.Numeric(10,2),Med_Cadera)
        .input("param_Plie_Abdominal",sql.Numeric(10,2),Plie_Abdominal)
        .input("param_Plie_Suprailiaco",sql.Numeric(10,2),Plie_Suprailiaco)
        .input("param_Plie_Bicipal",sql.Numeric(10,2),Plie_Bicipal)
        .input("param_Plie_Tricipital",sql.Numeric(10,2),Plie_Tricipital)
        .input("param_Plie_Subescapular",sql.Numeric(10,2),Plie_Subescapular)
        .input("param_Plie_Cuadricipital",sql.Numeric(10,2),Plie_Cuadricipital)
        .input("param_Plie_Peroneal",sql.Numeric(10,2),Plie_Peroneal)
        .input("param_Papada",sql.Numeric(10,2),Papada)
        .input("param_Porc_Gras",sql.Numeric(10,2),Porc_Gras)
        .query(queries.Medidas.Insertar)
        //seleccionamos el proceso almacenado del archivo querys.js
        //utilizando la nomenclatura de queries.[Tabla].[Metodo]
    
        res.json({Id_Cliente,Fecha,Altura,Peso,Med_Cuello,Med_Hombros,Med_Pecho,Med_Cintura,Med_Antebrazo,Med_Muslos,Med_Pantorilla,Med_Biceps,Med_Cadera,Plie_Abdominal,Plie_Suprailiaco,Plie_Bicipal,Plie_Tricipital,Plie_Subescapular,Plie_Cuadricipital,Plie_Peroneal,Papada,Porc_Gras});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }
}
// repetimos lo anterior pero cambiando el metodo, parametros y procedimiento almacenado usado
export const modificar = async (req, res) => {
    const {Id_Medida} = req.params
    const {Altura,Peso,Med_Cuello,Med_Hombros,Med_Pecho,Med_Cintura,Med_Antebrazo,Med_Muslos,Med_Pantorilla,Med_Biceps,Med_Cadera,Plie_Abdominal,Plie_Suprailiaco,Plie_Bicipal,Plie_Tricipital,Plie_Subescapular,Plie_Cuadricipital,Plie_Peroneal,Papada,Porc_Gras} = req.body
    const val = ValidarDatos([Altura,Peso,Med_Cuello,Med_Hombros,Med_Pecho,Med_Cintura,Med_Antebrazo,Med_Muslos,Med_Pantorilla,Med_Biceps,Med_Cadera,Plie_Abdominal,Plie_Suprailiaco,Plie_Bicipal,Plie_Tricipital,Plie_Subescapular,Plie_Cuadricipital,Plie_Peroneal,Papada,Porc_Gras]);
    if(val != 'todo bien'){
        return res.status(400).json({msg: val})
    }

    try {
        const pool = await conectar();
        const result = await pool.request()
        .input('param_Id',sql.Int,Id_Medida)
        .input("param_Altura",sql.Numeric(10,2),Altura)
        .input("param_Peso",sql.Numeric(10,2),Peso)
        .input("param_Med_Cuello",sql.Numeric(10,2),Med_Cuello)
        .input("param_Med_Hombros",sql.Numeric(10,2),Med_Hombros)
        .input("param_Med_Pecho",sql.Numeric(10,2),Med_Pecho)
        .input("param_Med_Cintura",sql.Numeric(10,2),Med_Cintura)
        .input("param_Med_Antebrazo",sql.Numeric(10,2),Med_Antebrazo)
        .input("param_Med_Muslos",sql.Numeric(10,2),Med_Muslos)
        .input("param_Med_Pantorilla",sql.Numeric(10,2),Med_Pantorilla)
        .input("param_Med_Biceps",sql.Numeric(10,2),Med_Biceps)
        .input("param_Med_Cadera",sql.Numeric(10,2),Med_Cadera)
        .input("param_Plie_Abdominal",sql.Numeric(10,2),Plie_Abdominal)
        .input("param_Plie_Suprailiaco",sql.Numeric(10,2),Plie_Suprailiaco)
        .input("param_Plie_Bicipal",sql.Numeric(10,2),Plie_Bicipal)
        .input("param_Plie_Tricipital",sql.Numeric(10,2),Plie_Tricipital)
        .input("param_Plie_Subescapular",sql.Numeric(10,2),Plie_Subescapular)
        .input("param_Plie_Cuadricipital",sql.Numeric(10,2),Plie_Cuadricipital)
        .input("param_Plie_Peroneal",sql.Numeric(10,2),Plie_Peroneal)
        .input("param_Papada",sql.Numeric(10,2),Papada)
        .input("param_Porc_Gras",sql.Numeric(10,2),Porc_Gras)
        .query(queries.Medidas.Modificar)
        res.json({Altura,Peso,Med_Cuello,Med_Hombros,Med_Pecho,Med_Cintura,Med_Antebrazo,Med_Muslos,Med_Pantorilla,Med_Biceps,Med_Cadera,Plie_Abdominal,Plie_Suprailiaco,Plie_Bicipal,Plie_Tricipital,Plie_Subescapular,Plie_Cuadricipital,Plie_Peroneal,Papada,Porc_Gras});
    } catch (error) {
        res.status(500) // error interno del servidor
        res.send(error.message);
    }

}