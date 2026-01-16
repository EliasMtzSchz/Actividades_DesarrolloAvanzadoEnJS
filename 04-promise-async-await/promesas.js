// PIZZERÍA para ejemplificar promesas

//DECLARACIÓN DE LA PROMESA
// 1. Pedir una pizza.
function ordenarPizza(sabor){
    // 2. Crear y retornar una promesa con dos posibles resultados: resolve, reject.
    return new Promise((resolve,reject) => {
        console.log(`Ordenando una pizza de ${sabor}...`);
        
        // 3. Simular un tiempo de espera de preparación de la pizza (para hacerlo asíncrono).
        setTimeout(() => {
            // 4. Lógica de negocio para resolver o rechazar la promesa.
            if (sabor === "pepperoni" || sabor === "hawaiana"){
                resolve(`Tu pizza de ${sabor} está lista! 🍕, ¡Buen Provecho!`);
            } else{
                reject(`Lo siento, no tenemos pizza de ${sabor}, 😔.`);
            }
        }, 2000);
    });
}

// CONSUMIR/RESOLVER LA PROMESA

// Caso 1: Ordenar una pizza que sí tenemos en el menú: pepperoni.
console.log("Caso 1: Quiero una pizza de pepperoni");
const promesaPepperoni = ordenarPizza("pepperoni");
promesaPepperoni
    .then((mensajeDeExito) => {
        console.log("Cliente 1 Feliz: (resolve):", mensajeDeExito);
    })
    .catch((mensajeDeError) => {
        console.error("Cliente 1 Triste: (reject):", mensajeDeError);
    })
    
console.log("-------------------------------");

// Caso 2: Ordenar una pizza que NO tenemos en el menú: suprema. 
console.log("Caso 2: Quiero una pizza suprema");
const promesaSuprema = ordenarPizza("suprema");
promesaSuprema
    .then((mensajeDeExito) => {
        console.log("Cliente 2 Feliz: (resolve):", mensajeDeExito);
    })
    .catch((mensajeDeError) => {
        console.error("Cliente 2 Triste: (reject):", mensajeDeError);
    })
    
console.log("-------------------------------");