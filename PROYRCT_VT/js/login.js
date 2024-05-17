document.getElementById('loginBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    var email = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;
    
    // Construye el objeto de datos a enviar
    var data = {
        email: email,
        clave: password
    };
    console.log(data);

    // Realiza la solicitud POST al endpoint de autenticación
    fetch('http://localhost:8080/v1/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Captura el token del objeto de respuesta
        var token = data.jwtToken;
        
        // Almacena el token en el almacenamiento local
        localStorage.setItem('token', token);
        console.log('Token almacenado:', token);
        alert('¡Inicio de sesión exitoso!');
        // Redirige a la página protegida o realiza otras acciones según la respuesta
        window.location.href = '/pages/administrador/listaProuctos.html';
    })
    .catch(error => {
        // Maneja los errores de la solicitud aquí
        console.error('Error:', error);
    });
});