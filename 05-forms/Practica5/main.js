document.getElementById('registroEvento').addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const intereses = document.querySelectorAll('input[name="intereses"]:checked');
  const horario = document.querySelector('input[name="horario"]:checked');
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;

  const mensajeError = document.getElementById('mensajeError');
  mensajeError.textContent = '';

  if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
    mensajeError.textContent = '❌ No se completó algún campo obligatorio.';
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailPattern.test(correo)) {
    mensajeError.textContent = '❌ El correo electrónico no es válido.';
    return;
  }

  const phonePattern = /^[0-9]{7,15}$/;
  if (!phonePattern.test(telefono)) {
    mensajeError.textContent = '❌ El teléfono debe tener entre 7 y 15 dígitos.';
    return;
  }

  const fechaSeleccionada = new Date(`${fecha} ${hora}`);
  if (fechaSeleccionada <= new Date()) {
    mensajeError.textContent = '❌ La fecha y hora deben ser futuras.';
    return;
  }

  mensajeError.style.color = 'green';
  mensajeError.textContent = '✅ Registro exitoso. ¡Gracias por registrarte!';
});