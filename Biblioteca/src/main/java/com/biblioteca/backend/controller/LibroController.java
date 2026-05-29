package com.biblioteca.backend.controller;

import java.util.List;
import com.biblioteca.backend.model.Libro;
import com.biblioteca.backend.service.LibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author xd
 */
@RestController
@RequestMapping("/api/libros")
public class LibroController {

    @Autowired
    private LibroService libroService;

    @GetMapping
    public List<Libro> listarLibros() {
        return libroService.listarLibros();
    }

    @GetMapping("/{id}")
    public Libro buscarLibro(@PathVariable int id) {
        return libroService.buscarporId(id);
    }

    @PostMapping
    public Libro agregarLibro(@RequestBody Libro libro) {
        return libroService.guardarLibro(libro);
    }

    @PutMapping("/{id}")
    public Libro modificarLibro(@PathVariable int id, @RequestBody Libro libro) {
        return libroService.modificarLibro(id, libro);
    }

    @DeleteMapping("/{id}")
    public String eliminarLibro(@PathVariable int id) {
        boolean eliminado = libroService.eliminarLibro(id);
        if (eliminado == true) {
            return "El libro " + id + " fue eliminado con exito";
        } else {
            return "El libro no se pudo eliminar, compruebe si el libro existe";
        }
    }
}
