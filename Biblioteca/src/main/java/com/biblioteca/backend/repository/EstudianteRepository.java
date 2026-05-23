/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.biblioteca.backend.repository;

import com.biblioteca.backend.model.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author sebastian
 */
public interface EstudianteRepository extends JpaRepository<Estudiante, Integer>{ //con el atributo estudiante le indicamos la tabla a la que se extiende 
                                                                                                                                              //y Integer el tipo de dato de la PK de la tabla 
}
