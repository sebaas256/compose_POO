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
            prestamo.setEstado("activo");
        }
        return prestamoRepository.save(prestamo);
    }

public Prestamo modificarPrestamo(int id, Prestamo prestamo) {  
    return prestamoRepository.findById(id).map(existente -> {   // busca el prestamo existente en la DB con findById
        if (prestamo.getFechaMaxDevolucion() != null)           // modifica fecha 
            existente.setFechaMaxDevolucion(prestamo.getFechaMaxDevolucion());
        if (prestamo.getEstado() != null) {                     // modifica estado si viene
            existente.setEstado(prestamo.getEstado());
            if ("Devuelto".equals(prestamo.getEstado())) {      //  si el estado es Devuelto
                existente.setFechaEntrega(new java.util.Date()); // registra la fecha de entrega actual get.date()
            }
        }
                if ("Devuelto".equals(prestamo.getEstado())) {
                    existente.setFechaEntrega(new java.util.Date()); // registra fecha de entrega
                } else {
                        existente.setFechaEntrega(null); // si no es devuelto, limpia la fecha
}
        return prestamoRepository.save(existente);              // guarda el existente con los cambios
    }).orElse(null);                                            // si no existe el ID devuelve null
}
    public void eliminar(Integer id) {
        prestamoRepository.deleteById(id);
    }
}
