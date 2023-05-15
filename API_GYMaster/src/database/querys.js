//este archivo contiene todos las sentencias a consultar la base de datos
export const queries = {
    //Consultas de la tabla Gimanasios
    Gimnasio:{
         Buscar:'EXEC SP_Buscar_Gimnasios'
        ,BuscarID:'EXEC SP_Buscar_Gimnasio @param_id'
        ,Insertar:'EXEC SP_Insertar_Gimnasio @param_Nombre,@param_Activo'
        ,Eliminar:'EXEC SP_Eleminar_Gimnasio @param_id'
        ,Modificar:'EXEC SP_Modificar_Gimnasio @param_Nombre,@param_id'
        ,ActivoNoActivo:'EXEC SP_Activo_NoActivo_Gimnasio @param_id'
    }
    //Consultas de la tabla Usuarios
    ,Usuario:{
        Buscar:'EXEC SP_Buscar_Usuarios'
       ,BuscarID:'EXEC SP_Buscar_Usuario @param_id'
       ,Insertar:'EXEC SP_Insertar_Usuario @param_Nombre,@param_Contrasena,@param_Id_Gym,@param_Perm_Articulos,@param_Perm_Ejercicios,@param_Perm_Presupuesto,@param_Perm_Admin,@param_UltimaInteraccion,@param_Conecciones,@param_Activo'
       ,Eliminar:'EXEC SP_Eleminar_Usuario @param_id'
       ,Modificar:'EXEC SP_Modificar_Usuario @param_Nombre,@param_Contrasena,@param_Id_Gym,@param_Perm_Articulos,@param_Perm_Ejercicios,@param_Perm_Presupuesto,@param_Perm_Admin,@param_id'
       ,ActivoNoActivo:'EXEC SP_Activo_NoActivo_Usuario @param_id'
       ,SumarConeccion:'EXEC SP_SumarConeccion @param_id'
       ,RestarConeccion:'EXEC SP_RestarConeccion @param_id'
       ,ComprobacionUsuario:'EXEC SP_ComprobacionUsuario @param_Nombre,@param_Contrasena'
       ,ActualizacionInteraccion:'EXEC SP_Actualizacion_Interaccion @param_id,@param_ultimaInteraccion'
   }
    //Consultas de la tabla Anuncios
    ,Anuncio:{
        Buscar:'EXEC SP_Buscar_Anuncios'
       ,BuscarID:'EXEC SP_Buscar_Anuncio @param_id'
       ,BuscarGym:'EXEC SP_Buscar_Anuncio_Gimnasio @param_id'
       ,Insertar:'EXEC SP_Insertar_Anuncio @param_Id_Gym,@param_Titulo,@param_Mensaje,@param_Fecha_Inicio,@param_Fecha_Final,@param_Activo'
       ,Eliminar:'EXEC SP_Eleminar_Anuncio @param_id'
       ,Modificar:'EXEC SP_Modificar_Anuncio @param_Id_Gym,@param_Titulo,@param_Mensaje,@param_Fecha_Inicio,@param_Fecha_Final,@param_id'
       ,ActivoNoActivo:'EXEC SP_Activo_NoActivo_Anuncio @param_id'
   }
    //Consultas de la tabla Sugerencias
    ,Sugerencia:{
        Buscar:'EXEC SP_Buscar_Sugerencias'
       ,BuscarID:'EXEC SP_Buscar_Sugerencia @param_id'
       ,Insertar:'EXEC SP_Insertar_Sugerencia @param_Id_Gym,@param_Titulo,@param_Mensaje'
       ,Eliminar:'EXEC SP_Eleminar_Sugerencia @param_id'
   }
    //Consultas de la tabla Categoria de Ejercicios
    ,Cat_Ejercicios:{
        Buscar:'EXEC SP_Buscar_Cat_Ejercicios'
       ,BuscarID:'EXEC SP_Buscar_Cat_Ejercicio @param_id'
       ,Insertar:'EXEC SP_Insertar_Cat_Ejercicio @param_Nombre'
       ,Eliminar:'EXEC SP_Eleminar_Cat_Ejercicio @param_id'
       ,Modificar:'EXEC SP_Modificar_Cat_Ejercicio @param_id,@param_Nombre'
   }
    //Consultas de la tabla Categoria de Productos
    ,Cat_Productos:{
        Buscar:'EXEC SP_Buscar_Cat_Productos'
       ,BuscarID:'EXEC SP_Buscar_Cat_Producto @param_id'
       ,BuscarGym:'EXEC SP_Buscar_Cat_Productos_Gimnasio @param_id'
       ,Insertar:'EXEC SP_Insertar_Cat_Producto @param_Nombre,@param_Id_Gym'
       ,Eliminar:'EXEC SP_Eleminar_Cat_Producto @param_id'
       ,Modificar:'EXEC SP_Modificar_Cat_Producto @param_id,@param_Nombre'
   }
    //Consultas de la tabla Tipos de Pago
    ,Tipos_Pagos:{
        Buscar:'EXEC SP_Buscar_Tipos_Pagos'
       ,BuscarID:'EXEC SP_Buscar_Tipo_Pago @param_id'
   }
    //Consultas de la tabla Moneda
    ,Moneda:{
        Buscar:'EXEC SP_Buscar_Monedas'
       ,BuscarID:'EXEC SP_Buscar_Moneda @param_id'
   }
    //Consultas de la tabla Cuotas
    ,Cuotas:{
        Buscar:'EXEC SP_Buscar_Cuotas'
       ,BuscarID:'EXEC SP_Buscar_Cuota @param_id'
       ,BuscarGym:'EXEC SP_Buscar_Cuota_Gimnasio @param_id'
       ,Insertar:'EXEC SP_Insertar_Cuota @param_Id_Gym,@param_Id_Moneda,@param_Nombre,@param_Plazo_Dias,@param_Costo,@param_Activo'
       ,Eliminar:'EXEC SP_Eleminar_Cuota @param_id'
       ,Modificar:'EXEC SP_Modificar_Cuota @param_id,@param_Id_Moneda,@param_Nombre,@param_Plazo_Dias,@param_Costo'
       ,ActivoNoActivo:'EXEC SP_Activo_NoActivo_Cuota @param_id'
   }
    //Consultas de la tabla Clientes
    ,Cliente:{
        Buscar:'EXEC SP_Buscar_Clientes'
       ,BuscarID:'EXEC SP_Buscar_Cliente @param_id'
       ,BuscarGym:'EXEC SP_Buscar_Clientes_Gimnasio @param_id'
       ,Insertar:'EXEC SP_Insertar_Cliente @param_Id_Gym,@param_Id_Cuota,@param_Cedula,@param_Nombre,@param_Apellidos,@param_Fecha_Nacimiento,@param_Activo'
       ,Eliminar:'EXEC SP_Eleminar_Cliente @param_id'
       ,Modificar:'EXEC SP_Modificar_Cliente @param_id,@param_Id_Cuota,@param_Cedula,@param_Nombre,@param_Apellidos,@param_Fecha_Nacimiento'
       ,ActivoNoActivo:'EXEC SP_Activo_NoActivo_Cliente @param_id'
   }
    //Consultas de la tabla Medidas
    ,Medidas:{
        Buscar:'EXEC SP_Buscar_Medidas'
       ,BuscarID:'EXEC SP_Buscar_Medida @param_id'
       ,BuscarCliente:'EXEC SP_Buscar_Medidas_Cliente @param_id'
       ,Insertar:'EXEC SP_Insertar_Medida @param_Id_Cliente,@param_Fecha,@param_Altura,@param_Peso,@param_Med_Cuello,@param_Med_Hombros,@param_Med_Pecho,@param_Med_Cintura,@param_Med_Antebrazo,@param_Med_Muslos,@param_Med_Pantorilla,@param_Med_Biceps,@param_Med_Cadera,@param_Plie_Abdominal,@param_Plie_Suprailiaco,@param_Plie_Bicipal,@param_Plie_Tricipital,@param_Plie_Subescapular,@param_Plie_Cuadricipital,@param_Plie_Peroneal,@param_Papada,@param_Porc_Gras'
       ,Eliminar:'EXEC SP_Eleminar_Medida @param_id'
       ,Modificar:'EXEC SP_Modificar_Medida @param_id,@param_Altura,@param_Peso,@param_Med_Cuello,@param_Med_Hombros,@param_Med_Pecho,@param_Med_Cintura,@param_Med_Antebrazo,@param_Med_Muslos,@param_Med_Pantorilla,@param_Med_Biceps,@param_Med_Cadera,@param_Plie_Abdominal,@param_Plie_Suprailiaco,@param_Plie_Bicipal,@param_Plie_Tricipital,@param_Plie_Subescapular,@param_Plie_Cuadricipital,@param_Plie_Peroneal,@param_Papada,@param_Porc_Gras'
   }
    //Consultas de la tabla Pagos
    ,Pagos:{
        Buscar:'EXEC SP_Buscar_Pagos'
       ,BuscarID:'EXEC SP_Buscar_Pago @param_id'
       ,BuscarCliente:'EXEC SP_Buscar_Pago_Cliente @param_id'
       ,BuscarGym:'EXEC SP_Buscar_Pago_Gimnasio @param_id'
       ,Insertar:'EXEC SP_Insertar_Pago @param_Id_Gym,@param_Id_Cliente,@param_Monto,@param_Id_Moneda,@param_Id_TPago,@param_Fecha'
       ,Eliminar:'EXEC SP_Eleminar_Pago @param_id'
       ,Modificar:'EXEC SP_Modificar_Pago @param_Id_Cliente,@param_Monto,@param_Id_Moneda,@param_Id_TPago,@param_id'
   }
    //Consultas de la tabla Cobros Extra
    ,Cobros_Extra:{
        Buscar:'EXEC SP_Buscar_Cobros_Extras'
       ,BuscarID:'EXEC SP_Buscar_Cobro_Extra @param_id'
       ,BuscarPago:'EXEC SP_Buscar_Cobro_Extra_Pagos @param_id'
       ,Insertar:'EXEC SP_Insertar_Cobro_Extra @param_Id_Pago,@param_Id_TPago,@param_Id_Moneda,@param_Monto,@param_Razon'
       ,Eliminar:'EXEC SP_Eleminar_Cobro_Extra @param_id'
       ,Modificar:'EXEC SP_Modificar_Cobro_Extra @param_id,@param_Id_TPago,@param_Id_Moneda,@param_Monto,@param_Razon'
   }
    //Consultas de la tabla Productos
    ,Productos:{
        Buscar:'EXEC SP_Buscar_Productos'
       ,BuscarID:'EXEC SP_Buscar_Producto @param_id'
       ,BuscarGym:'EXEC SP_Buscar_Producto_Gym @param_id'
       ,Insertar:'EXEC SP_Insertar_Producto @param_Nombre,@param_Marca,@param_Id_Moneda,@param_Id_Gym,@param_Existencias,@param_Precio,@param_Activo'
       ,Eliminar:'EXEC SP_Eleminar_Producto @param_id'
       ,Modificar:'EXEC SP_Modificar_Producto @param_Nombre,@param_Marca,@param_Id_Moneda,@param_Existencias,@param_Precio,@param_id'
       ,ActivoNoActivo:'EXEC SP_Activo_NoActivo_Producto @param_id'
   }
    //Consultas de la tabla Ventas
    ,Ventas:{
        Buscar:'EXEC SP_Buscar_Ventas'
       ,BuscarID:'EXEC SP_Buscar_Venta @param_id'
       ,BuscarCliente:'EXEC SP_Buscar_Venta_Cliente @param_id'
       ,BuscarGym:'EXEC SP_Buscar_Venta_Gimnasio @param_id'
       ,Insertar:'EXEC SP_Insertar_Venta @param_Monto,@param_Id_Moneda,@param_Id_Gym,@param_Id_Cliente,@param_Id_TPago,@param_Fecha'
       ,Eliminar:'EXEC SP_Eleminar_Venta @param_id'
       ,Modificar:'EXEC SP_Modificar_Venta @param_Monto,@param_Id_Moneda,@param_Id_Gym,@param_Id_Cliente,@param_Id_TPago,@param_Fecha,@param_id'
   }
    //Consultas de la tabla Detalle de Venta
    ,Detalles_Venta:{
        Buscar:'EXEC SP_Buscar_Detalles_Ventas'
       ,BuscarID:'EXEC SP_Buscar_Detalle_Venta @param_id'
       ,BuscarVenta:'EXEC SP_Buscar_Detalle_Venta_Venta @param_id'
       ,Insertar:'EXEC SP_Insertar_Detalle_Venta @param_Id_Venta,@param_Id_Producto,@param_Id_Moneda,@param_Cantidad,@param_Precio'
       ,Eliminar:'EXEC SP_Eleminar_Detalle_Venta @param_id'
       ,Modificar:'EXEC SP_Modificar_Detalle_Venta @param_id,@param_Id_Producto,@param_Id_Moneda,@param_Cantidad,@param_Precio'
   }
    //Consultas de la tabla Rutinas
    ,Rutinas:{
        Buscar:'EXEC SP_Buscar_Rutinas'
       ,BuscarID:'EXEC SP_Buscar_Rutina @param_id'
       ,BuscarCliente:'EXEC SP_Buscar_Rutina_Cliente @param_id'
       ,Insertar:'EXEC SP_Insertar_Rutina @param_Id_Cliente,@param_Fecha'
       ,Eliminar:'EXEC SP_Eleminar_Rutina @param_id'
       ,Modificar:'EXEC SP_Modificar_Rutina @param_id,@param_Id_Cliente,@param_Fecha'
   }
    //Consultas de la tabla Ejercicios
    ,Ejercicios:{
        Buscar:'EXEC SP_Buscar_Ejercicios'
       ,BuscarID:'EXEC SP_Buscar_Ejercicio @param_id'
       ,BuscarRutina:'EXEC SP_Buscar_Ejercicio_Rutina @param_id'
       ,Insertar:'EXEC SP_Insertar_Ejercicio @param_Id_Rutina,@param_Dia_Nombre,@param_Ejercicio,@param_Series,@param_Repeticiones'
       ,Eliminar:'EXEC SP_Eleminar_Ejercicio @param_id'
       ,Modificar:'EXEC SP_Modificar_Ejercicio @param_id,@param_Dia_Nombre,@param_Ejercicio,@param_Series,@param_Repeticiones'
   }
    //Consultas de la tabla Gastos Fijos
    ,Gastos_Fijos:{
        Buscar:'EXEC SP_Buscar_Gastos_Fijos'
       ,BuscarID:'EXEC SP_Buscar_Gasto_Fijo @param_id'
       ,BuscarGym:'EXEC SP_Buscar_Gasto_Fijo_Gimnasio @param_id'
       ,Insertar:'EXEC SP_Insertar_Gasto_Fijo @param_Id_Gym,@param_Id_Moneda,@param_Nombre,@param_Monto,@param_Activo'
       ,Eliminar:'EXEC SP_Eleminar_Gasto_Fijo @param_id'
       ,Modificar:'EXEC SP_Modificar_Gasto_Fijo @param_Id_Moneda,@param_Nombre,@param_Monto,@param_id'
       ,ActivoNoActivo:'EXEC SP_Activo_NoActivo_Gasto_Fijo @param_id'
   }
    //Consultas de la tabla Gastos Variables
    ,Gastos_Variables:{
        Buscar:'EXEC SP_Buscar_Gastos_Variables'
       ,BuscarID:'EXEC SP_Buscar_Gasto_Variable @param_id'
       ,BuscarGym:'EXEC SP_Buscar_Gasto_Variable_Gimnasio @param_id'
       ,Insertar:'EXEC SP_Insertar_Gasto_Variable @param_Id_Gym,@param_Id_Moneda,@param_Nombre,@param_Monto,@param_Activo'
       ,Eliminar:'EXEC SP_Eleminar_Gasto_Variable @param_id'
       ,Modificar:'EXEC SP_Modificar_Gasto_Variable @param_Id_Gym,@param_Id_Moneda,@param_Nombre,@param_Monto,@param_id'
       ,ActivoNoActivo:'EXEC SP_Activo_NoActivo_Gasto_Variable @param_id'
   }
    //Consultas de la tabla Union de Categoria de Ejercicio y Ejercicios
    ,Union_Cat_Ejercicios:{
        Buscar:'EXEC SP_Buscar_Ejercicios_Cat_Ejercicios'
       ,BuscarID:'EXEC SP_Buscar_Ejercicio_Cat_Ejercicio @param_id'
       ,Insertar:'EXEC SP_Insertar_Ejercicio_Cat_Ejercicio @param_Id_Ejercicio,@param_Id_Cat_Ejercicio'
       ,Eliminar:'EXEC SP_Eleminar_Ejercicio_Cat_Ejercicio @param_id1,@param_id2'
       ,Modificar:'EXEC SP_Modificar_Ejercicio_Cat_Ejercicio @param_id1,@param_id2,@param_Id_Ejercicio,@param_Id_Cat_Ejercicio'
   }
    //Consultas de la tabla Union de Categoria de Productos y Productos
    ,Union_Cat_Productos:{
        Buscar:'EXEC SP_Buscar_Productos_Cat_Productos'
       ,BuscarID:'EXEC SP_Buscar_Producto_Cat_Producto @param_id'
       ,Insertar:'EXEC SP_Insertar_Producto_Cat_Producto @param_Id_Producto,@param_Id_Cat_Prdocuto'
       ,Eliminar:'EXEC SP_Eleminar_Producto_Cat_Producto @param_id1,@param_id2'
       ,Modificar:'EXEC SP_Modificar_Producto_Cat_Producto @param_id1,@param_id2,@param_Id_Producto,@param_Id_Cat_Prdocuto'
       ,ActivoNoActivo:'EXEC '
   }
    //Consultas de la tabla Devoluciones
    ,Devoluciones:{
        Buscar:'EXEC SP_Buscar_Devoluciones'
       ,BuscarID:'EXEC SP_Buscar_Devolucion @param_id'
       ,BuscarVenta:'EXEC SP_Buscar_Devolucion_Venta @param_id'
       ,Insertar:'EXEC SP_Insertar_Devolucion @param_Id_Venta,@param_Monto,@param_Fecha'
       ,Eliminar:'EXEC SP_Eleminar_Devolucion @param_id'
       ,Modificar:'EXEC SP_Modificar_Devolucion @param_Id_Venta,@param_Monto,@param_Fecha,@param_id'
   }
    //Consultas de la tabla Historial
    ,Historial:{
        Buscar:'EXEC SP_Buscar_Historial'
       ,BuscarID:'EXEC SP_Buscar_Un_Historial @param_id'
       ,Insertar:'EXEC SP_Insertar_Historial @param_Id_Usuario,@param_Accion,@param_Fecha'
       ,Eliminar:'EXEC SP_Eleminar_Historial @param_id'
   }
}