import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet(name = "LoginServlet", urlPatterns = {"/LoginServlet"})
public class LoginServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        //Recibir los datos del formulario JSP
        String user = request.getParameter("usuario");
        String pass = request.getParameter("password");
        
        //Credenciales del contenedor
        String url = "jdbc:sqlserver://db-poo:1433;databaseName=BIBLIOTECA;encrypt=false";
        String dbUser = "sa";
        String dbPass = "Proyecto123#";

        try {
            //Cargar el driver de SQL Server
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            
            //Conectar a la base de datos
            try (Connection conn = DriverManager.getConnection(url, dbUser, dbPass)) {
                
                //Preparar la consulta (Usamos PreparedStatement para evitar inyecciones SQL)
                //Usando la columna NombreDeUsario
                String sql = "SELECT * FROM Usuario WHERE NombreUsuario = ? AND Password = ?";
                PreparedStatement ps = conn.prepareStatement(sql);
                ps.setString(1, user);
                ps.setString(2, pass);
                
                ResultSet rs = ps.executeQuery();
                
                //Validar si encontro al usuario
                if (rs.next()) {
                    HttpSession sesion = request.getSession();
                    sesion.setAttribute("usuarioLogueado", rs.getString("NombreCompleto"));
                    sesion.setAttribute("rolUsuario", rs.getString("Rol"));
                    
                    //Redirigimos al panel principal
                    response.sendRedirect("dashboard.jsp");
                } else {
                    //Login Fallido: Redirigimos de vuelta al index con un mensaje de error
                    response.sendRedirect("index.jsp?error=1");
                }
            }
        } catch (Exception e) {
            System.out.println("Error en conexión: " + e.getMessage());
            response.sendRedirect("index.jsp?error=2");
        }
    }
}