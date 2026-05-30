package com.biblioteca.backend.service;

import com.biblioteca.backend.model.Transaccion;
import com.biblioteca.backend.repository.TransaccionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author xd
 */
@Service
public class TransaccionService {

    @Autowired
    private TransaccionRepository transaccionRepository;

    public List<Transaccion> listar() {
        return transaccionRepository.findAll();
    }

    public Transaccion buscarporId(int id) {
        return transaccionRepository.findById(id).orElse(null);
    }

public Transaccion guardarTransaccion(Transaccion transaccion) {

    System.out.println("TRANSACCION RECIBIDA");

    if (transaccion.getPrestamo() == null) {
        System.out.println("Prestamo es NULL");
    } else {
        System.out.println(
            "Prestamo ID = " +
            transaccion.getPrestamo().getIdPrestamo()
        );
    }

    return transaccionRepository.save(transaccion);
}

    public Transaccion modificarTransaccion(int id, Transaccion transaccion) {
        if (transaccionRepository.existsById(id)) {
            transaccion.setIDTransaccion(id);
            return transaccionRepository.save(transaccion);
        }
        return null;
    }
    
    public boolean eliminarTransaccion(int id){
        if (transaccionRepository.existsById(id)) {
            transaccionRepository.deleteById(id);
            return true;
        }
        return false;
    }

}
