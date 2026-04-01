const planetas = require('./planetas');

// Mostrar información de los planetas
planetas.forEach(planeta => {
  console.log(`🪐 ¡Planeta ${planeta.nombre} descubierto!`);
  console.log(`Descripción: ${planeta.descripcion}`);
  console.log(`Descubierto en: ${planeta.descubiertoEn}`);
  console.log('---');
});