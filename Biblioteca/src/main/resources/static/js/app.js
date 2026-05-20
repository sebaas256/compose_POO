document.getElementById('formLogin').addEventListener('submit', function(evento) {
    evento.preventDefault(); 
    const usuarioIngresado = document.getElementById('usuario').value;
    const passwordIngresada = document.getElementById('password').value;
    const mensajeError = document.getElementById('mensajeError');
    const datos = {
        nombreUsuario: usuarioIngresado,
        password: passwordIngresada
    };
    fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    .then(respuesta => respuesta.json()) 
    .then(data => {
        if(data.Estado === 'Completado') {
            mensajeError.style.display = 'none';
            alert(data.Mensaje); 
        } else {
            mensajeError.textContent = data.Mensaje;
            mensajeError.style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        mensajeError.textContent = 'Error al conectar con el servidor.';
        mensajeError.style.display = 'block';
    });
});
