// ============================================================
// dashboard.js — Panel Gerencial
// ============================================================
import './sidebar.js';
import { getMetricas, getUltimosPrestamos } from './api.js';

// ── Datos de ejemplo (eliminar cuando el backend esté listo) ──
const EJEMPLO_METRICAS = { };
const EJEMPLO_PRESTAMOS = [
    { estudiante: 'Rodrigo Pineda',   libro: 'Java a Fondo',               atendidoPor: 'admin', estado: 'devuelto', multa: 0.00,  detalle: 'Sin cargos'              },
    { estudiante: 'Valeria Guzman',   libro: 'Clean Code',                 atendidoPor: 'admin', estado: 'mora',     multa: 3.75,  detalle: 'Cobro por entrega tardía' },
    { estudiante: 'Josue Henriquez',  libro: 'CCNA 200-301',               atendidoPor: 'admin', estado: 'activo',   multa: 0.00,  detalle: 'Sin cargos'              },
    { estudiante: 'Adriana Orellana', libro: 'Cuentos de Barro',           atendidoPor: 'admin', estado: 'devuelto', multa: 0.00,  detalle: 'Sin cargos'              },
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
        lista = await getUltimosPrestamos(); // TODO: descomentar cuando el backend esté listo
    } catch {
        lista = EJEMPLO_PRESTAMOS;           // fallback a datos de ejemplo
    }

    const BADGES = { devuelto: 'badge--verde', activo: 'badge--azul', mora: 'badge--rojo' };

    document.getElementById('tabla-prestamos').innerHTML = lista.map(p => `
        <tr>
            <td>${p.estudiante}</td>
            <td>${p.libro}</td>
            <td>${p.atendidoPor}</td>
            <td><span class="badge ${BADGES[p.estado] || 'badge--amarillo'}">${capitalizar(p.estado)}</span></td>
            <td>$${p.multa.toFixed(2)}</td>
            <td>${p.detalle}</td>
        </tr>
    `).join('');
}

function capitalizar(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

cargarMetricas();
cargarTabla();
