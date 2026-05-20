/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.biblioteca.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 *
 * @author sebastian
 */
@Entity
@Table(name = "Usuario")

public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IDUsuario")
    private Integer idUsuario;
    
    @Column(name = "NombreCompleto")
    private String nombreCompleto;
    
    @Column(name = "NombreUsuario")
    private String nombreUsuario;
    
    @Column(name = "Password")
    private String password;
    
    @Column(name = "Rol")
    private String rol;

    public Integer getIDUsuario() {
        return idUsuario;
    }

    public void setIDUsuario(Integer IDUsuario) {
        this.idUsuario = IDUsuario;
    }

    public String getNombreCompleto() {
        return nombreCompleto;
    }

    public void setNombreCompleto(String NombreCompleto) {
        this.nombreCompleto = NombreCompleto;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String NombreUsuario) {
        this.nombreUsuario = NombreUsuario;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String Password) {
        this.password = Password;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String Rol) {
        this.rol = Rol;
    }
    
    
}
