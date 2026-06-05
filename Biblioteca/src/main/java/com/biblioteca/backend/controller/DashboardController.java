/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.biblioteca.backend.controller;

/**
 *
 * @author sebastian
 */
import com.biblioteca.backend.dto.ResumenDashboardDTO;
import com.biblioteca.backend.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "*")
public class DashboardController {
    @Autowired
    private DashboardService dashboardService;

    @GetMapping("/resumen")
    public ResumenDashboardDTO obtenerResumenGeneral() {
        // Devuelve el JSON con los datos reales en milisegundos
        return dashboardService.obtenerResumen();
    }
}
