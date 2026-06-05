/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.biblioteca.backend.service;

/**
 *
 * @author sebastian
 */
import com.biblioteca.backend.dto.ResumenDashboardDTO;
import com.biblioteca.backend.repository.LibroRepository;
import com.biblioteca.backend.repository.PrestamoRepository;
import com.biblioteca.backend.repository.TransaccionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {
    @Autowired
    private LibroRepository libroRepository;

    @Autowired
    private PrestamoRepository prestamoRepository;

    @Autowired
    private TransaccionRepository transaccionRepository;

    public ResumenDashboardDTO obtenerResumen() {
        ResumenDashboardDTO dto = new ResumenDashboardDTO();
        
        // 1. Ejecutamos las consultas matemáticas en SQL Server
        Integer totalEjemplares = libroRepository.obtenerTotalEjemplares();
        Integer prestamosActivos = prestamoRepository.contarPrestamosActivos();
        Integer enMora = prestamoRepository.contarEnMora();
        Double totalRecaudado = transaccionRepository.obtenerTotalRecaudado();

        // 2. Metemos los resultados en el DTO
        dto.setTotalEjemplares(totalEjemplares);
        dto.setPrestamosActivos(prestamosActivos);
        dto.setEnMora(enMora);
        dto.setTotalRecaudado(totalRecaudado);

        return dto;
    }
}
