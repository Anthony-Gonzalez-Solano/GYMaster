//este documento rienen como finalidad reucir la cantidad de validaciones en otros archivos

function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}

export const ValidarDatos = function (array){ // resivimos un conjunto de datos en un array o list
    for (let i = 0; i < array.length; i++) {
        if(array[i] == null){ // primero validamos que el elemento no es nulo
            return 'Bad Request: Parametros nulos';
        }
        if(isString(array[i]) != true){ // si no es nulo revisamos si es string
            if(parseInt(array[i]) < 0){ // si no es un string validamos que los numeros no sean negativos
                return 'Bad Request: Parametros numericos invalidos';
            }
        }else if(array[i] == ""){ // si es un string revisamos que este no este vacio
                return 'Bad Request: Parametros invalidos';
        }

    }
    return 'todo bien'; // en caso de que no encontremos un error, retornamos un valor que nos indique que no hubo problema
}
