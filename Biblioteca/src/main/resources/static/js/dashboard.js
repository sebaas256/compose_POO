// ============================================================
// dashboard.js — Panel Gerencial
// ============================================================
import './sidebar.js';
import { getMetricas, getPrestamos } from './api.js'; // <-- ¡Agregué getMetricas de nuevo!

// ── Datos de ejemplo (eliminar cuando el backend esté listo) ──
const EJEMPLO_METRICAS = { };
const EJEMPLO_PRESTAMOS = [
    { estudiante: 'Rodrigo Pineda',   libro: 'Java a Fondo',    atendidoPor: 'admin', estado: 'devuelto', multa: 0.00, detalle: 'Sin cargos' },
    { estudiante: 'Valeria Guzman',   libro: 'Clean Code',      atendidoPor: 'admin', estado: 'mora',     multa: 3.75, detalle: 'Cobro por entrega tardía' },
    { estudiante: 'Josue Henriquez',  libro: 'CCNA 200-301',    atendidoPor: 'admin', estado: 'activo',   multa: 0.00, detalle: 'Sin cargos' },
    { estudiante: 'Adriana Orellana', libro: 'Cuentos de Barro',atendidoPor: 'admin', estado: 'devuelto', multa: 0.00, detalle: 'Sin cargos' },
];

// ── Cargar métricas ───────────────────────────────────────────
async function cargarMetricas() {
    let m;
    try {
        m = await getMetricas(); // TODO: descomentar cuando el backend esté listo
    } catch {
        m = EJEMPLO_METRICAS;   // fallback a datos de ejemplo
    }
    document.getElementById('metrica-ejemplares').textContent = m.totalEjemplares;
    document.getElementById('metrica-activos').textContent    = m.PrestamosActivos;
    document.getElementById('metrica-mora').textContent       = m.enMora;
    document.getElementById('metrica-recaudado').textContent  = '$' + m.totalRecaudado.toFixed(2);
}

// ── Cargar tabla ──────────────────────────────────────────────
async function cargarTabla() {
    let lista;
    try {
        lista = await getPrestamos();
    } catch {
        lista = [];
    }

    if ($.fn.DataTable.isDataTable('#tabla-prestamos')) {
        $('#tabla-prestamos').DataTable().destroy();
    }

    document.getElementById('tabla-prestamos').querySelector('tbody').innerHTML = lista.map(p => `
        <tr>
            <td>${p.idPrestamo}</td>
            <td>${p.estudiante?.nombre ?? '—'} ${p.estudiante?.apellido ?? ''}</td>
            <td>${p.libro?.titulo ?? '—'}</td>
            <td>${p.usuario?.nombreUsuario ?? '—'}</td>
            <td>${p.fechaSalida?.split('T')[0] ?? '—'}</td>
            <td>${p.fechaMaxDevolucion?.split('T')[0] ?? '—'}</td>
            <td>${p.fechaEntrega?.split('T')[0] ?? 'Pendiente'}</td>
            <td>${p.estado === 'Devuelto'
                ? '<span class="badge badge--verde">Devuelto</span>'
                : p.estado === 'Mora'
                ? '<span class="badge badge--rojo">Mora</span>'
                : '<span class="badge badge--azul">Activo</span>'}</td>
        </tr>
    `).join('');

    $('#tabla-prestamos').DataTable({ pageLength: 10 });
}

// Ejecutamos ambas funciones
cargarMetricas(); // <-- ¡Volví a poner tu función para que carguen los números verdes!
cargarTabla();