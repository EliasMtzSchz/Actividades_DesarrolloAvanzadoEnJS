// Importamos Zod
const { z } = window.Zod;

// Esquema para validar los datos del formulario
const registerSchema = z.object({
    // Define que el nombre debe ser una cadena no vacía
    name: z.string().min(1, "El nombre no puede estar vacío"),

    // Valida que el correo tenga el formato correcto
    email: z.string().email("El correo electrónico no es válido"),

    // La contraseña debe tener al menos 6 caracteres
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();
      
    // Capturamos los valores ingresados
    const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    };

    try {
    // Validamos los datos usando Zod
    registerSchema.parse(formData);

    alert("¡Registro exitoso!");
    document.getElementById("errors").textContent = "";
    } catch (error) {
    // Mostramos los mensajes de error en la página
    document.getElementById("errors").textContent = 
        error.errors.map(e => e.message).join(", ");
    }
});