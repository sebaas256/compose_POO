/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.biblioteca.backend.dto;

/**
 *
 * @author sebastian
 */
public class ResumenDashboardDTO {
    private Integer totalEjemplares;
    private Integer PrestamosActivos;
    private Integer enMora;
    private double totalRecaudado;

    public Integer getTotalEjemplares() {
        return totalEjemplares;
    }

    public void setTotalEjemplares(Integer totalEjemplares) {
        this.totalEjemplares = totalEjemplares;
    }

    public Integer getPrestamosActivos() {
        return PrestamosActivos;
    }

    public void setPrestamosActivos(Integer PrestamosActivos) {
        this.PrestamosActivos = PrestamosActivos;
    }

    public Integer getEnMora() {
        return enMora;
    }

    public void setEnMora(Integer enMora) {
        this.enMora = enMora;
    }

    public double getTotalRecaudado() {
        return totalRecaudado;
    }

    public void setTotalRecaudado(double totalRecaudado) {
        this.totalRecaudado = totalRecaudado;
    }
}
