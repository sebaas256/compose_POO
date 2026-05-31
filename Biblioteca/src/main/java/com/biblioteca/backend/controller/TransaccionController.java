package com.biblioteca.backend.controller;

import com.biblioteca.backend.model.Transaccion;
import com.biblioteca.backend.service.TransaccionService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 * @author xd
 */
@RestController
@RequestMapping("/api/transaccion")
@CrossOrigin(origins = "*") //estenigga
public class TransaccionController {

    @Autowired
    private TransaccionService transaccionService;

    @GetMapping
    public List<Transaccion> listarTransacciones() {
        return transaccionService.listar();
    }

    @GetMapping("/{id}")
    public Transaccion buscarTransaccion(@PathVariable int id) {
        return transaccionService.buscarporId(id);
    }

    @PostMapping
    public Transaccion agregarTransaccion(@RequestBody Transaccion transaccion) {
        return transaccionService.guardarTransaccion(transaccion);
    }

    @PutMapping("/{id}")
    public Transaccion modificarTransaccion(@PathVariable int id, @RequestBody Transaccion transaccion) {
        return transaccionService.modificarTransaccion(id, transaccion);
    }

    @DeleteMapping("/{id}")
    public String eliminarTransaccion(@PathVariable int id) {
        boolean eliminado = transaccionService.eliminarTransaccion(id);
        if (eliminado == true) {
            return "La transaccion fue eliminada con exito";
        }
        return "La transaccion no se pudo eliminar";
    }

}
