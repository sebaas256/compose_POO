// ============================================================
// prestamos.js — Gestión de Préstamos
// ============================================================
import './sidebar.js';
import { getPrestamos, crearPrestamo } from './api.js';

const EJEMPLO = [
    { id: 1, estudiante: 'Rodrigo Pineda',   libro: 'Java a Fondo',    atendidoPor: 'admin', salida: '2026-05-01', maxDevolucion: '2026-05-15', entrega: '2026-05-14', estado: 'devuelto' },
    { id: 2, estudiante: 'Valeria Guzman',   libro: 'Clean Code',      atendidoPor: 'admin', salida: '2026-04-20', maxDevolucion: '2026-05-04', entrega: null,         estado: 'mora'     },
    { id: 3, estudiante: 'Josue Henriquez',  libro: 'CCNA 200-301',    atendidoPor: 'admin', salida: '2026-05-10', maxDevolucion: '2026-05-24', entrega: null,         estado: 'activo'   },
    { id: 4, estudiante: 'Adriana Orellana', libro: 'Cuentos de Barro',atendidoPor: 'admin', salida: '2026-05-05', maxDevolucion: '2026-05-19', entrega: '2026-05-18', estado: 'devuelto' },
];

const BADGES = { devuelto: 'badge--verde', activo: 'badge--azul', mora: 'badge--rojo' };

async function cargarTabla() {
    let lista;
    try {
        lista = await getPrestamos();
    } catch {
        lista = EJEMPLO;
    }
    document.getElementById('tabla-prestamos').innerHTML = lista.map(p => `
        <tr>
            <td>${p.id}</td>
            <td>${p.estudiante}</td>
            <td>${p.libro}</td>
            <td>${p.atendidoPor}</td>
            <td>${p.salida}</td>
            <td>${p.maxDevolucion}</td>
            <td>${p.entrega ?? '—'}</td>
            <td><span class="badge ${BADGES[p.estado] || 'badge--amarillo'}">${capitalizar(p.estado)}</span></td>
        </tr>
    `).join('');
}

document.getElementById('btn-guardar-prestamo').addEventListener('click', async () => {
    const usuario = sessionStorage.getItem('usuarioActivo');
    const data = {
        idEstudiante:      parseInt(document.getElementById('pre-estudiante').value),
        idLibro:           parseInt(document.getElementById('pre-libro').value),
        idUsuario:         usuario, // TODO: el backend debe resolver el ID por nombre de usuario
        fechaMaxDevolucion: document.getElementById('pre-fecha').value,
    };
    if (!data.idEstudiante || !data.idLibro) return alert('ID de Estudiante y Libro son requeridos.');
    try {
        await crearPrestamo(data);
        alert('Préstamo registrado correctamente.');
        cargarTabla();
    } catch {
        alert('Backend no disponible aún. El préstamo no fue guardado.');
    }
});

document.getElementById('btn-limpiar-prestamo').addEventListener('click', () => {
    ['pre-estudiante','pre-libro','pre-fecha'].forEach(id => document.getElementById(id).value = '');
});

function capitalizar(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

cargarTabla();
