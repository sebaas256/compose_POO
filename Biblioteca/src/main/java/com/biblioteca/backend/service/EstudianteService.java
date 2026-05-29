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
