document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío normal del formulario
        
        // Crea un objeto para los datos del formulario
        const data = {};
        new FormData(form).forEach((value, key) => {
            data[key] = value;
        });
        
        // Envía los datos a la API en formato JSON
        fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // Convierte el objeto a JSON
        })
        .then(response => response.json())
        .then(result => {
            console.log('Éxito:', result);
            alert('Registro exitoso'); // Muestra un aviso de éxito
            // Aquí puedes manejar la respuesta de la API
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error en el registro'); // Muestra un aviso de error
            // Aquí puedes manejar errores
        });
    });
});
