/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.biblioteca.backend.controller;

import com.biblioteca.backend.dto.LoginRequest;
import com.biblioteca.backend.model.Usuario;
import com.biblioteca.backend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
/**
 *
 * @author sebastian
 */

@RestController // Con esto devolvemos un formato JSON
@RequestMapping("/api")
@CrossOrigin(origins = "*")

public class AuthController {
    
    @Autowired
    private UsuarioRepository usuarioRepository;
    
    @PostMapping("/login") //Define la url de acceso y envia los datos al localhost:8080
    public ResponseEntity<Map<String, String>> login(@RequestBody LoginRequest request){ //El requestBody toma el JSON que viene de internet y lo mete en DTO
        Map<String ,String> respuesta = new HashMap<>();
        
        //Usamos el repo para buscar si las credenciales coinciden en sql server
        Optional<Usuario> usuarioOpt = usuarioRepository.findByNombreUsuarioAndPassword(
                request.getNombreUsuario(),
                request.getPassword()
        );
        
        if (usuarioOpt.isPresent()){
            Usuario usuario = usuarioOpt.get();
            
            respuesta.put("Estado", "Completado");
            respuesta.put("Mensaje", "Bienvenido" + usuario.getNombreCompleto());
            respuesta.put("Rol", usuario.getRol());
            
            return ResponseEntity.ok(respuesta); //Devuelve un http 200 (exito)
        }else{
            respuesta.put("Estado", "Fallido");
            respuesta.put("Mensaje", "Usuario o contraseña incorrectos");
            
            return ResponseEntity.status(401).body(respuesta); //decolvemos un (401) "NO AUTORIZADO"
        }
    }
    
}
