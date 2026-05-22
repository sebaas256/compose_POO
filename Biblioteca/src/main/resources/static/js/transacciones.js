// ============================================================
// transacciones.js — Transacciones y Sanciones
// ============================================================
import './sidebar.js';
import { getTransacciones, crearTransaccion } from './api.js';

const EJEMPLO = [
    { id: 1, prestamo: 2, atendidoPor: 'admin', mora: 3.75, fecha: '2026-05-21', detalle: 'Cobro de multa por entrega tardía' },
    { id: 2, prestamo: 1, atendidoPor: 'admin', mora: 0.00, fecha: '2026-05-14', detalle: 'Emisión de ticket - Sin cargos'    },
];

async function cargarTabla() {
    let lista;
    try {
        lista = await getTransacciones();
    } catch {
        lista = EJEMPLO;
    }
    document.getElementById('tabla-transacciones').innerHTML = lista.map(t => `
        <tr>
            <td>${t.id}</td>
            <td>${t.prestamo}</td>
            <td>${t.atendidoPor}</td>
            <td>$${t.mora.toFixed(2)}</td>
            <td>${t.fecha}</td>
            <td>${t.detalle}</td>
        </tr>
    `).join('');
}

document.getElementById('btn-guardar-transaccion').addEventListener('click', async () => {
    const usuario = sessionStorage.getItem('usuarioActivo');
    const data = {
        idPrestamo:         parseInt(document.getElementById('tra-prestamo').value),
        idUsuario:          usuario,
        mora:               parseFloat(document.getElementById('tra-mora').value) || 0,
        detalleTransaccion: document.getElementById('tra-detalle').value.trim(),
    };
    if (!data.idPrestamo) return alert('ID de Préstamo es requerido.');
    try {
        await crearTransaccion(data);
        alert('Transacción registrada correctamente.');
        cargarTabla();
    } catch {
        alert('Backend no disponible aún. La transacción no fue guardada.');
    }
});

document.getElementById('btn-limpiar-transaccion').addEventListener('click', () => {
    ['tra-prestamo','tra-mora','tra-detalle'].forEach(id => document.getElementById(id).value = '');
});

cargarTabla();
