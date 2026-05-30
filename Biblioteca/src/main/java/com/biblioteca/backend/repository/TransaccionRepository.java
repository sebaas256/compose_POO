package com.biblioteca.backend.repository;

import com.biblioteca.backend.model.Libro;
import com.biblioteca.backend.model.Transaccion;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author xd
 */
public interface TransaccionRepository extends JpaRepository<Transaccion, Integer>{
    
}