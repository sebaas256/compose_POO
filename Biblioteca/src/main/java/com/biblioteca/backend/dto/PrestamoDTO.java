package com.biblioteca.backend.dto;

import java.util.Date;


public class PrestamoDTO {
    
    private Integer idPrestamo;
    private Integer idEstudiante;
    private Integer idLibro;
    private Integer idUsuario;
    private Date fechaSalida;
    private Date fechaMaxDevolucion;
    private Date fechaEntrega;
    private String estado;

    // --- GETTERS Y SETTERS ---
    public Integer getIdPrestamo() { return idPrestamo; }
    public void setIdPrestamo(Integer idPrestamo) { this.idPrestamo = idPrestamo; }

    public Integer getIdEstudiante() { return idEstudiante; }
    public void setIdEstudiante(Integer idEstudiante) { this.idEstudiante = idEstudiante; }

    public Integer getIdLibro() { return idLibro; }
    public void setIdLibro(Integer idLibro) { this.idLibro = idLibro; }

    public Integer getIdUsuario() { return idUsuario; }
    public void setIdUsuario(Integer idUsuario) { this.idUsuario = idUsuario; }

    public Date getFechaSalida() { return fechaSalida; }
    public void setFechaSalida(Date fechaSalida) { this.fechaSalida = fechaSalida; }

    public Date getFechaMaxDevolucion() { return fechaMaxDevolucion; }
    public void setFechaMaxDevolucion(Date fechaMaxDevolucion) { this.fechaMaxDevolucion = fechaMaxDevolucion; }

    public Date getFechaEntrega() { return fechaEntrega; }
    public void setFechaEntrega(Date fechaEntrega) { this.fechaEntrega = fechaEntrega; }

    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }
}