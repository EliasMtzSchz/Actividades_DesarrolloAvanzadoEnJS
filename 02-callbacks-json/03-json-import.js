/* Importamos el JSON con Common JS */
const curso = require('./cursos.json');

console.log(curso);
console.log('Tipo de dato:', typeof curso);

console.log('------------------');

// Accedemos a los datos del curso.
console.log(curso[0].nombre);
console.log(curso[0].instructor);
console.log(curso[0].temas.join(', '));

// Agregar un nuevo curso.
curso.push({
    nombre:"Curso de Node.js Avanzado",
    instructor: "Diego García",
    duracionHoras: 100,
    temas:[
        "Node.js",
        "Express",
        "Bases de Datos",
        "APIs REST",
        "Autenticación",
        "Despliegue"
    ],
    esOnline: true,
    precio: 199.99
})

console.log(curso[3]);