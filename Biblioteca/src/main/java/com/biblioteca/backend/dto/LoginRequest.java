/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.biblioteca.backend.dto;

/**
 *
 * @author sebastian
 */
public class LoginRequest {
    private String nombreUsuario;
    private String password;
    
    public String getNombreUsuario(){
        return nombreUsuario;
    }
    
    public void setNombreUsuario(String NombreUsuario){
        this.nombreUsuario = NombreUsuario;
    }
    
    public String getPassword(){
        return password;
    }
    
    public void setPassword(String Password){
        this.password = Password;
    }
    
}
