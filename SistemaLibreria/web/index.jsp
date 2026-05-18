<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema Gerencial - Biblioteca</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="contenedor-principal">
        <header class="cabecera">
            <h1>Sistema de Información Gerencial</h1>
            <h2>Biblioteca Central</h2>
        </header>

        <main class="contenido">
            <section class="panel-login">
                <h3>Acceso al Sistema</h3>
                <form action="LoginServlet" method="POST">
                    <!-- Enviamos datos a Servlet -->
                    <% 
                    String error = request.getParameter("error");
                    if(error != null && error.equals("1")){ 
                %>
                    <div style="color: red; margin-bottom: 15px; font-weight: bold;">
                        Usuario o contraseña incorrectos.
                    </div>
                <% } else if(error != null && error.equals("2")){ %>
                    <div style="color: red; margin-bottom: 15px; font-weight: bold;">
                        Error al conectar con la base de datos.
                    </div>
                <% } %>
                    <div class="grupo-input">
                        <label for="usuario">Usuario:</label>
                        <input type="text" id="usuario" name="usuario" required>
                    </div>
                    <div class="grupo-input">
                        <label for="password">Contraseña:</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <button type="submit" class="btn-ingresar">Ingresar</button>
                </form>
            </section>
        </main>

        <footer class="pie-pagina">
            <p>&copy; 2026 Equipo de Desarrollo - Proyecto POO</p>
        </footer>
    </div>
</body>
</html>