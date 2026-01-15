/* -- CALLBACKS -- */
// Un callback es una función que se pasa a otra función como argumento y se espera que la función contenedor ejecute el callback en algún momento.

// Ejemplo de 2 funciones a usar en un callback.

function miCallbackDeExito(resultado){
    console.log(`😉¡La operación fue exitosa!, Resultado: ${resultado}`);
}

function miCallbackDeError(mensajeError){
    console.log(`😞¡La operación falló!, Error: ${mensajeError}`);
}

// Función callback
function procesarDatos(dato, callbackExito, callbackError){
    console.log(`Procesando dato: ${dato}`);

    if (dato !== null && dato !== undefined && dato !== ""){
        setTimeout(() => {
            const datoProcesado = dato.toUpperCase(); // Simula el procesamiento del dato.
            callbackExito(datoProcesado); // Llama al callback de éxito con el dato procesado.
        }, 1000); // Simula una operación asíncrona
    } else {
        // Simulamos un error si el dato es inválido.
        setTimeout(() => {
            const mensajeError = "Dato inválido proporcionado.";
            callbackError(mensajeError); // Llama al callback de error con un mensaje.
        }, 500); // Simula una operación asíncrona
    }
}

// Ejemplo #1: Callback de éxito.
procesarDatos("hola mundo", miCallbackDeExito, miCallbackDeError);

// Ejemplo #2: Callback de error.
procesarDatos("", miCallbackDeExito, miCallbackDeError);