const miJSONString = `{
"nombre": "Curso de JavaScript Avanzado",
"instructor": "César Guerra",
"duraciónHoras": 40,
"temas":[
    "Asincronía", 
    "Callbacks", 
    "JSON", 
    "Promises", 
    "Async/Await", 
    "NodeJs"],
"esOnline": true,
"metadatos": {
    "nivel": "Intermedio",
    "version": "1.0",
    "fechaLanzamiento": "2025-22-09"
},
"precio": null
}`;

console.log('Tipo de dato:', typeof miJSONString);
console.log(miJSONString);

console.log('-----------------');


/* Convierto el JSON a Objeto de JS*/
// JSON.parse(): Convierte un string JSON en un objeto de JavaScript.
const miObjeto = JSON.parse(miJSONString);
console.log('Tipo de dato:', typeof miObjeto);
console.log(miObjeto);

console.log('-----------------');
// Como ya es un objeto de JS, puedo acceder a sus propiedades.
console.log('Nombre del curso:', miObjeto.nombre);
console.log('Instructor del curso:', miObjeto.instructor);
console.log('Duración en horas:', miObjeto.duraciónHoras);
