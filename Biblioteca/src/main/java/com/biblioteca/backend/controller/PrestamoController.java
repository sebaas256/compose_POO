package com.biblioteca.backend.controller;

import com.biblioteca.backend.dto.PrestamoDTO;
import com.biblioteca.backend.model.Prestamo;
import com.biblioteca.backend.model.Estudiante;
import com.biblioteca.backend.model.Libro;
import com.biblioteca.backend.model.Usuario;
import com.biblioteca.backend.service.PrestamoService;
import com.biblioteca.backend.repository.EstudianteRepository;
import com.biblioteca.backend.repository.LibroRepository;
import com.biblioteca.backend.repository.UsuarioRepository; // Si tienes uno para los bibliotecarios

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/prestamos")
@CrossOrigin(origins = "*")
public class PrestamoController {

    @Autowired
    private PrestamoService prestamoService;

    @Autowired
    private EstudianteRepository estudianteRepository;

    @Autowired
    private LibroRepository libroRepository;
    
    @Autowired
    private UsuarioRepository usuarioRepository; 

    @GetMapping
    public List<Prestamo> listarPrestamos() {
        return prestamoService.obtenerTodos();
    }


    @PostMapping
    public ResponseEntity<?> crearPrestamo(@RequestBody PrestamoDTO prestamoDTO) {
        try {

            Prestamo prestamo = new Prestamo();
            prestamo.setFechaMaxDevolucion(prestamoDTO.getFechaMaxDevolucion());
            prestamo.setEstado(prestamoDTO.getEstado() != null ? prestamoDTO.getEstado() : "activo");
            prestamo.setFechaSalida(new java.util.Date()); // Se asigna automáticamente al crearse

            Estudiante estudiante = estudianteRepository.findById(prestamoDTO.getIdEstudiante())
                    .orElseThrow(() -> new RuntimeException("Estudiante no encontrado con ID: " + prestamoDTO.getIdEstudiante()));
            prestamo.setEstudiante(estudiante);

        
            Libro libro = libroRepository.findById(prestamoDTO.getIdLibro())
                    .orElseThrow(() -> new RuntimeException("Libro no encontrado con ID: " + prestamoDTO.getIdLibro()));
            prestamo.setLibro(libro);

            Integer idUser = prestamoDTO.getIdUsuario() != null ? prestamoDTO.getIdUsuario() : 1;
            if (usuarioRepository != null) {
                Usuario usuario = usuarioRepository.findById(idUser).orElse(null);
                prestamo.setUsuario(usuario);
            }

            Prestamo guardado = prestamoService.guardar(prestamo);
            return ResponseEntity.status(HttpStatus.CREATED).body(guardado);

        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarPrestamo(@PathVariable Integer id) {
        prestamoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}