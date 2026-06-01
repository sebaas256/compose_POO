package com.biblioteca.backend.service;

import com.biblioteca.backend.model.Prestamo;
import com.biblioteca.backend.model.Libro;
import com.biblioteca.backend.repository.PrestamoRepository;
import com.biblioteca.backend.repository.LibroRepository; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PrestamoService {

    @Autowired
    private PrestamoRepository prestamoRepository;

    @Autowired
    private LibroRepository libroRepository; 

    public List<Prestamo> obtenerTodos() {
        return prestamoRepository.findAll();
    }

    public Optional<Prestamo> obtenerPorId(Integer id) {
        return prestamoRepository.findById(id);
    }

    public Prestamo guardar(Prestamo prestamo) {
        if (prestamo.getEstado() == null) {
            prestamo.setEstado("activo");
        }

        if (prestamo.getFechaSalida() == null) {
            prestamo.setFechaSalida(new Date());
        }

        // Control de fechas 
        if (prestamo.getFechaMaxDevolucion() == null) {
            Calendar cal = Calendar.getInstance();
            cal.setTime(prestamo.getFechaSalida());
            cal.add(Calendar.DAY_OF_YEAR, 7); 
            prestamo.setFechaMaxDevolucion(cal.getTime());
        }

        // Proceso de préstamo (Modificación de disponibilidad y stock del libro)
        if (prestamo.getLibro() != null) {
            Libro libro = libroRepository.findById(prestamo.getLibro().getIdLibro()).orElse(null);
            
            if (libro != null) {
                if (libro.getStock() <= 0 || !libro.isDisponibilidad()) {
                    throw new IllegalArgumentException("El libro '" + libro.getTitulo() + "' no tiene stock disponible para préstamo.");
                }
                
                libro.setStock(libro.getStock() - 1);
                libro.setDisponibilidad(libro.getStock() > 0);
                libroRepository.save(libro); 
            }
        }

        return prestamoRepository.save(prestamo);
    }

    // modificar / devolver préstamo  ─────────────────────────
    public Prestamo modificarPrestamo(int id, Prestamo prestamo) {  
        return prestamoRepository.findById(id).map(existente -> {   
            
            if (prestamo.getFechaMaxDevolucion() != null) {
                existente.setFechaMaxDevolucion(prestamo.getFechaMaxDevolucion());
            }
            
            if (prestamo.getEstado() != null) {
                existente.setEstado(prestamo.getEstado());
                
                if ("devuelto".equalsIgnoreCase(prestamo.getEstado())) {
                    Date fechaEntregaReal = new Date();
                    existente.setFechaEntrega(fechaEntregaReal);

                    if (existente.getLibro() != null) {
                        Libro libro = libroRepository.findById(existente.getLibro().getIdLibro()).orElse(null);
                        if (libro != null) {
                            libro.setStock(libro.getStock() + 1);
                            libro.setDisponibilidad(true);
                            libroRepository.save(libro);
                        }
                    }

                    // Cálculo de sanciones y mora 
                    if (fechaEntregaReal.after(existente.getFechaMaxDevolucion())) {
                        // Calcular días de retraso
                        long diferenciaMilisegundos = fechaEntregaReal.getTime() - existente.getFechaMaxDevolucion().getTime();
                        long diasRetraso = diferenciaMilisegundos / (1000 * 60 * 60 * 24); 
                        
                        if (diasRetraso > 0) {
                            double tarifaPorDia = 1.50; // $1.50 de multa diario
                            double multaTotal = (diasRetraso * tarifaPorDia) + 2.00; 
                            
                            System.out.println("El estudiante posee una sanción acumulada de: $" + multaTotal + " por " + diasRetraso + " días de retraso.");
                        }
                    }
                } else {
                    existente.setFechaEntrega(null);
                }
            }
            
            return prestamoRepository.save(existente);              
        }).orElse(null);                                            
    }

    public void eliminar(Integer id) {
        prestamoRepository.deleteById(id);
    }
}