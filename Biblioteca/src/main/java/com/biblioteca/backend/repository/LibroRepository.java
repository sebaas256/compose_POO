package com.biblioteca.backend.repository;

import com.biblioteca.backend.model.Libro;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author xd
 */
public interface LibroRepository extends JpaRepository<Libro, Integer>{
    
}
