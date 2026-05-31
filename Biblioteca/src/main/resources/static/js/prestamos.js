// ============================================================
// prestamos.js — Gestión de Préstamos
// ============================================================

// imports
import './sidebar.js';
import { getPrestamos, crearPrestamo } from './api.js';

// ============================================================

const EJEMPLO = [
    { idPrestamo: 1, idEstudiante: 10, idLibro: 5, idUsuario: 1, fechaSalida: '2026-05-31', fechaMaxDevolucion: '2026-06-07', fechaEntrega: 'Pendiente', estado: 'activo' },
    { idPrestamo: 2, idEstudiante: 12, idLibro: 2, idUsuario: 1, fechaSalida: '2026-05-20', fechaMaxDevolucion: '2026-05-27', fechaEntrega: '2026-05-25', estado: 'devuelto' }
];

async function cargarTabla() {
    let lista;
    try {
        lista = await getPrestamos();
    } catch {
        lista = EJEMPLO;
    }
    document.getElementById('tabla-prestamos').innerHTML = lista.map(p => `
        <tr>
            <td>${p.idPrestamo}</td>
            <td>${p.idEstudiante}</td>
            <td>${p.idLibro}</td>
            <td>${p.idUsuario || 1}</td>
            <td>${p.fechaSalida || ''}</td>
            <td>${p.fechaMaxDevolucion || ''}</td>
            <td>${p.fechaEntrega || 'Pendiente'}</td>
            <td><span class="estado estado--${p.estado}">${p.estado}</span></td>
        </tr>
    `).join('');
}


document.getElementById('btn-guardar-prestamo').addEventListener('click', async () => {
    const usuarioActivo = sessionStorage.getItem('idUsuarioActivo') || 1;

    const data = {
        idEstudiante:       parseInt(document.getElementById('pre-estudiante').value),
        idLibro:            parseInt(document.getElementById('pre-libro').value),
        idUsuario:          parseInt(usuarioActivo),
        fechaMaxDevolucion: document.getElementById('pre-fecha').value,
        estado:             'activo'
    };

    if (!data.idEstudiante || !data.idLibro || !data.fechaMaxDevolucion) {
        return alert('Todos los campos son requeridos para registrar el préstamo.');
    }

    try {
        await crearPrestamo(data);
        alert('Préstamo registrado correctamente.');
        cargarTabla();
    } catch {
        alert('Backend no disponible aún. El préstamo no fue guardado.');
    }
});


document.getElementById('btn-limpiar-prestamo').addEventListener('click', () => {
    ['pre-estudiante', 'pre-libro', 'pre-fecha'].forEach(id => document.getElementById(id).value = '');
});

cargarTabla();