package com.biblioteca.backend.service;

import com.biblioteca.backend.model.Prestamo;
import com.biblioteca.backend.repository.PrestamoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PrestamoService {

    @Autowired
    private PrestamoRepository prestamoRepository;

    public List<Prestamo> obtenerTodos() {
        return prestamoRepository.findAll();
    }

    public Optional<Prestamo> obtenerPorId(Integer id) {
        return prestamoRepository.findById(id);
    }

    public Prestamo guardar(Prestamo prestamo) {
        if (prestamo.getIdPrestamo() == null) {
            prestamo.setEstado("Activo");
        }
        return prestamoRepository.save(prestamo);
    }

    public void eliminar(Integer id) {
        prestamoRepository.deleteById(id);
    }
}
