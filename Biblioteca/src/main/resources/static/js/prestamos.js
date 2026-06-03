// ============================================================
// prestamos.js — Gestión de Préstamos
// ============================================================
import { mostrarModal } from './sidebar.js';
import { getPrestamos, crearPrestamo, eliminarPrestamo, modificarPrestamo, BASE_URL } from './api.js';
 
// ============================================================
const EJEMPLO = [
    { idPrestamo: 1, idEstudiante: 10, idLibro: 5, idUsuario: 1, fechaSalida: '2026-05-31', fechaMaxDevolucion: '2026-06-07', fechaEntrega: null, estado: 'Activo' },
    { idPrestamo: 2, idEstudiante: 12, idLibro: 2, idUsuario: 1, fechaSalida: '2026-05-20', fechaMaxDevolucion: '2026-05-27', fechaEntrega: '2026-05-25', estado: 'Devuelto' }
];
 
// consts formularios
const FormRegistrar = document.getElementById('form-registrar');
const FormEliminar  = document.getElementById('form-eliminar');
const FormModificar = document.getElementById('form-modificar');
const Titulo        = document.getElementById('titulo-formulario');
 
// cargar tabla
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
// registrar prestamo
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
        return mostrarModal('Todos los campos son requeridos para registrar el préstamo.');
    }
    try {
        await crearPrestamo(data);
        mostrarModal('Préstamo registrado correctamente.');
        cargarTabla();
    } catch {
        mostrarModal('Error al registrar el préstamo.');
    }
});
 
// limpiar registrar
document.getElementById('btn-limpiar-prestamo').addEventListener('click', () => {
    ['pre-estudiante', 'pre-libro', 'pre-fecha']
        .forEach(id => document.getElementById(id).value = '');
});
 
// eliminar prestamo
document.getElementById('btn-confirmar-eliminar').addEventListener('click', async () => {
    const id = document.getElementById('elim-id').value;
    if (!id) return mostrarModal('Ingresa un ID.');
    if (!confirm(`¿Eliminar préstamo ${id}?`)) return;
    
    try {
        const response = await fetch(`${BASE_URL}/prestamos/${id}`, { method: 'DELETE' });
        if (response.status === 500) {
            return mostrarModal('No se puede eliminar: este préstamo tiene transacciones asociadas.');
        }
        if (!response.ok) throw new Error();
        
        mostrarModal('Eliminado correctamente.');
        cargarTabla();
    } catch {
        mostrarModal('Error al eliminar el préstamo.');
    }
});

// modificar prestamo
document.getElementById('btn-guardar-modificar').addEventListener('click', async () => {
    const id = document.getElementById('mod-id').value;
    if (!id) return mostrarModal('Ingresa un ID.');
    const data = {
        fechaMaxDevolucion: document.getElementById('mod-fecha').value,
        estado:             document.getElementById('mod-estado').value,
    };
    try {
        await modificarPrestamo(id, data);
        mostrarModal('Modificado correctamente.');
        cargarTabla();
    } catch (error) {
        mostrarModal(error.message || 'Error al modificar.');
    }
});

// limpiar modificar
document.getElementById('btn-limpiar-modificar').addEventListener('click', () => {
    ['mod-id', 'mod-fecha', 'mod-estado']
        .forEach(id => document.getElementById(id).value = '');
});
 
cargarTabla();
 
// mostrar formulario
function mostrarFormulario(cual) {
    FormRegistrar.style.display = 'none';
    FormModificar.style.display = 'none';
    FormEliminar.style.display  = 'none';
 
    if (cual === 'registrar') {
        FormRegistrar.style.display = 'block';
        Titulo.textContent = 'Registrar Préstamo';
    } else if (cual === 'modificar') {
        FormModificar.style.display = 'block';
        Titulo.textContent = 'Modificar Préstamo';
    } else if (cual === 'eliminar') {
        FormEliminar.style.display  = 'block';
        Titulo.textContent = 'Eliminar Préstamo';
    }
}
 
mostrarFormulario('registrar');
 
// vincular botones
document.getElementById('btn-registrar').addEventListener('click', () => mostrarFormulario('registrar'));
document.getElementById('btn-modificar').addEventListener('click', () => mostrarFormulario('modificar'));
document.getElementById('btn-eliminar').addEventListener('click',  () => mostrarFormulario('eliminar'));
