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
