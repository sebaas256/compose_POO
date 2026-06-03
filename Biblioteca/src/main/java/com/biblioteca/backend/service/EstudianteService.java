/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.biblioteca.backend.service;

import com.biblioteca.backend.model.Estudiante;
import com.biblioteca.backend.repository.EstudianteRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author sebastian
 */

@Service    
public class EstudianteService {
    @Autowired
    private EstudianteRepository estudianteRepository;
    
    public List<Estudiante> listarEstudiantes(){
        return estudianteRepository.findAll();
    }
    
    public Estudiante guardarEstudiante(Estudiante estudiante){
        if(estudiante.getEdad() < 0){
            throw new IllegalArgumentException("La edad no puede ser negativa");
        }
        if(estudiante.getNombre() == null || estudiante.getNombre().isBlank()){
            throw new IllegalArgumentException("El nombre es obligatorio");
        }
        if(estudiante.getApellido() == null || estudiante.getApellido().isBlank()){
            throw new IllegalArgumentException("El apellido es obligatorio");
        }
        if(estudiante.getEmail() == null || !estudiante.getEmail().contains("@")){
            throw new IllegalArgumentException("Ingrese un correo electrónico válido");
        }
        if(estudiante.getClaveAcceso() == null || estudiante.getClaveAcceso().length() < 6){
            throw new IllegalArgumentException("La contraseña debe tener al menos 6 caracteres");
        }
        return estudianteRepository.save(estudiante);
    }
    
    public boolean eliminarEstudiante(int id){
        if(estudianteRepository.existsById(id)){
            estudianteRepository.deleteById(id);
            return true;
        }
        return false;
    }
    
    public Estudiante modificarEstudiante(int id, Estudiante estudianteDetalles){
        if(estudianteRepository.existsById(id)){
            estudianteDetalles.setIdEstudiante(id);
            return estudianteRepository.save(estudianteDetalles);
        }
        return null;
    }        
}
