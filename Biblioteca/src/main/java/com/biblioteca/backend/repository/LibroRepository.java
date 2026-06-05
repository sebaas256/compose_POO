package com.biblioteca.backend.repository;

import com.biblioteca.backend.model.Libro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 *
 * @author xd
 */
public interface LibroRepository extends JpaRepository<Libro, Integer>{
    // Suma la columna 'stock' de todos los libros. COALESCE evita errores si la tabla está vacía.
    @Query("SELECT COALESCE(SUM(l.stock), 0) FROM Libro l")
    Integer obtenerTotalEjemplares();
}
