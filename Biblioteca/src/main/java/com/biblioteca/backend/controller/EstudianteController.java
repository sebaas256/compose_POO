/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.biblioteca.backend.controller;

/**
 *
 * @author sebastian
 */

import com.biblioteca.backend.dto.EstudianteDTO;
import com.biblioteca.backend.dto.EstudianteRegistroDTO;
import com.biblioteca.backend.model.Estudiante;
import com.biblioteca.backend.repository.EstudianteRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //RestController indica que esta clase es un controlador que devuelve un JSON
@RequestMapping("/api/estudiantes") //se define la ruta base
@CrossOrigin(origins = "*") //permite que el front se pueda conectar a este backend sin bloqueos
public class EstudianteController {
    
    @Autowired //permite que spring inyecte automaticamente la instancia del repo para hablar con la bd
    private EstudianteRepository estudianteRepository;
    
    @GetMapping //responde a peticiones GET
    public List<EstudianteDTO> obtenerEstudiantes(){
        //se obtienen los datos crudos de sql server
        List<Estudiante> listaEntidades = estudianteRepository.findAll();
        //preparar la lista limpia para el front
        List<EstudianteDTO> listaDTO = new ArrayList<>();
        //copiar de la Entidad al DTO omitiendo ClaveAcceso
        for(Estudiante est : listaEntidades){
            EstudianteDTO dto = new EstudianteDTO();
            dto.setIdEstudiante(est.getIdEstudiante());
            dto.setNombre(est.getNombre());
            dto.setApellido(est.getApellido());
            dto.setEdad(est.getEdad());
            dto.setGenero(est.getGenero());
            dto.setEmail(est.getEmail());
            
            listaDTO.add(dto);
        }
        return listaDTO; //se retorana el json limpio
    }
    
    @PostMapping //Responde a peticiones POST
    public String registrarEstudiante(@RequestBody EstudianteRegistroDTO datosRegistro){
        //creamos un objeto vacio para mandar a sqlServer
        Estudiante nuevoEstudiante = new Estudiante();
        //transferimos los datos del dto al objeto
        nuevoEstudiante.setNombre(datosRegistro.getNombre());
        nuevoEstudiante.setApellido(datosRegistro.getApellido());
        nuevoEstudiante.setGenero(datosRegistro.getGenero());
        nuevoEstudiante.setEdad(datosRegistro.getEdad());
        nuevoEstudiante.setEmail(datosRegistro.getEmail());
        nuevoEstudiante.setClaveAcceso(datosRegistro.getClaveAcceso());
        //se inserta en sql server
        estudianteRepository.save(nuevoEstudiante);
        
        return "{\"Mensaje\":  \" EStudiante registrado con exito\"}";
    }
}
