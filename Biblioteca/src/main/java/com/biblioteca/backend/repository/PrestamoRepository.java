package com.biblioteca.backend.repository;

import com.biblioteca.backend.model.Prestamo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrestamoRepository extends JpaRepository<Prestamo, Integer> {
    // JpaRepository ya incluye buscar, guardar, eliminar y actualizar automáticamente.
}