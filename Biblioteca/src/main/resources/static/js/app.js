document.getElementById('formLogin').addEventListener('submit', function(evento) {
    evento.preventDefault(); 
    const usuarioIngresado = document.getElementById('usuario').value;
    const passwordIngresada = document.getElementById('password').value;
    const mensajeError = document.getElementById('mensajeError');
    const datos = {
        nombreUsuario: usuarioIngresado,
        password: passwordIngresada
    };
    fetch('http://100.83.105.3:8080/api/login', {
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
// --   guardar usuario y redirigea dashboard     
            sessionStorage.setItem('usuarioActivo', data.nombreUsuario || usuarioIngresado);
            sessionStorage.setItem('rolActivo' , data.rol || 'Bibliotecario' );
            window.location.href = 'dashboard.html';
//fin guardar user

//            alert(data.Mensaje); 
        } else {
            mensajeError.textContent = data.Mensaje;
            mensajeError.style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        //--agregado para abrir sin backend
        if (usuarioIngresado === 'admin' && passwordIngresada === 'admin') {
            sessionStorage.setItem('usuarioActivo', 'admin');
                sessionStorage.setItem('rolActivo' , 'Administrador' );
                window.location.href = 'dashboard.html';
            return;
        }
        //fin sin backend 
        
        mensajeError.textContent = 'Error al conectar con el servidor.';
        mensajeError.style.display = 'block';
    });
});
