package com.biblioteca.backend.service;

import com.biblioteca.backend.model.Libro;
import com.biblioteca.backend.repository.LibroRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author xd
 */
@Service
public class LibroService {

    @Autowired
    private LibroRepository libroRepository;

    public List<Libro> listarLibros() {
        return libroRepository.findAll();
    }

    public Libro guardarLibro(Libro libro) {
        if (libro.getTitulo().length() > 100) {
            throw new IllegalArgumentException("El titulo no debe superar los 100 caracteres");
        }
        if (libro.getStock() < 0) {
            throw new IllegalArgumentException("El stock inical no debe ser menor a 0");
        }
        // alertar disponibilidad baja
        if (libro.getStock() > 0 && libro.getStock() <= 3){
            System.out.println("El libro " + libro.getTitulo() + " tiene un stock bajo: " + libro.getStock() + " unidades restantes.");
        }
        return libroRepository.save(libro);
    }

    public Libro buscarporId(int id) {
        return libroRepository.findById(id).orElse(null);
    }

    public boolean eliminarLibro(int id) {
        if (libroRepository.existsById(id)) {
            libroRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public Libro modificarLibro(int id, Libro libro) {
        if (libroRepository.existsById(id)) {
            if (libro.getStock() < 0) {
                throw new IllegalArgumentException("El stock no debe ser menor a 0");
            }

            if (libro.getStock() > 0 && libro.getStock() <= 3){
                System.out.println("El libro " + libro.getTitulo() + " tiene un stock bajo: " + libro.getStock() + " unidades restantes.");
            }
            
            libro.setIdLibro(id);
            libro.setDisponibilidad(libro.getStock() > 0); // actualiza el estado según el stock
            return libroRepository.save(libro);
        }
        return null;
    }
}
