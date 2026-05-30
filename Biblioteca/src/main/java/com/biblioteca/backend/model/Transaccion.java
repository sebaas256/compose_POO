package com.biblioteca.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import java.util.Date;

/**
 * @author xd
 */
@Entity
@Table(name = "Transaccion")
public class Transaccion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IDTransaccion")
    private Integer IdTransaccion;

    @ManyToOne
    @JsonProperty("prestamo")
    @JoinColumn(name = "IDPrestamo")
    private Prestamo prestamo;

    @ManyToOne
    @JsonProperty("usuario")
    @JoinColumn(name = "IDUsuario")
    private Usuario usuario;

    @Column(name = "Mora")
    private double mora;

    @Column(name = "FechaTransaccion")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "America/El_Salvador")
    private Date fechaTransaccion;

    @Column(name = "DetalleTransaccion")
    private String detalleTransaccion;

    public Integer getIDTransaccion() {
        return IdTransaccion;
    }

    public void setIDTransaccion(Integer IDTransaccion) {
        this.IdTransaccion = IDTransaccion;
    }

    public double getMora() {
        return mora;
    }

    public void setMora(double mora) {
        this.mora = mora;
    }

    public Date getFechaTransaccion() {
        return fechaTransaccion;
    }

    public void setFechaTransaccion(Date fechaTransaccion) {
        this.fechaTransaccion = fechaTransaccion;
    }

    public String getDetalleTransaccion() {
        return detalleTransaccion;
    }

    public void setDetalleTransaccion(String detalleTransaccion) {
        this.detalleTransaccion = detalleTransaccion;
    }

    public Prestamo getPrestamo() {
        return prestamo;
    }

    public void setPrestamo(Prestamo prestamo) {
        this.prestamo = prestamo;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

}
