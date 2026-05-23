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

@Entity //convierte esta clase en una entidad de bd
@Table(name = "Estudiante") //apunta a la tabla en sql server
public class Estudiante {
    
    @Id //indica que esta variable es la PK
    @GeneratedValue(strategy = GenerationType.IDENTITY) //otorga la creacion del id como auto incrementable
    @Column(name = "IDEstudiante") //conecta la variable con la columna IDEstudiante
    private Integer idEstudiante;
    
    @Column(name = "Nombre")
    private String nombre;
    
    @Column(name = "Apellido")
    private String apellido;
    
    @Column(name = "Genero")
    private String genero;
    
    @Column(name = "Edad")
    private int edad;
    
    @Column(name = "Email")
    private String email;
    
    @Column(name = "ClaveAcceso")
    private String claveAcceso;

    public Integer getIdEstudiante() {
        return idEstudiante;
    }

    public void setIdEstudiante(Integer idEstudiante) {
        this.idEstudiante = idEstudiante;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getClaveAcceso() {
        return claveAcceso;
    }

    public void setClaveAcceso(String claveAcceso) {
        this.claveAcceso = claveAcceso;
    }

    
}
