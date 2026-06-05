package com.biblioteca.backend.repository;

import com.biblioteca.backend.model.Libro;
import com.biblioteca.backend.model.Transaccion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author xd
 */
public interface TransaccionRepository extends JpaRepository<Transaccion, Integer>{
    // Suma la columna 'mora' (dinero) de toda la tabla
    @Query("SELECT COALESCE(SUM(t.mora), 0.0) FROM Transaccion t")
    Double obtenerTotalRecaudado();
}