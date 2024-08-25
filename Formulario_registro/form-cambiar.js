document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Detiene el envío del formulario

        // Obtiene los datos del formulario
        const formData = new FormData(form);
        const data = Object.fromEntries(formData); // Convierte a objeto

        try {
            // Envía los datos a la API
            const response = await fetch('http://localhost:3000/usuarios', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data) // Convierte el objeto a JSON
            });
            
            const result = await response.json();
            console.log('Éxito:', result);
            alert('Registro exitoso'); 
            window.location.href = '../lista.html'; // Redirige después del registro
            
        } catch (error) {
            console.error('Error:', error);
            alert('Error en el registro'); // Muestra mensaje de error
        }
    });
});


// script.js

// Seleccionar todos los campos de entrada
const inputs = document.querySelectorAll('input');

// Función para mover el foco al siguiente campo
const focusNextInput = (e) => {
  const input = e.target;
  const inputsArray = Array.from(inputs);
  const currentIndex = inputsArray.indexOf(input);
  
  // Mover el foco al siguiente campo si existe
  if (currentIndex < inputsArray.length - 1) {
    inputsArray[currentIndex + 1].focus();
  }
};

// Agregar un event listener para cada campo de entrada
inputs.forEach(input => {
  input.addEventListener('input', focusNextInput);
});
