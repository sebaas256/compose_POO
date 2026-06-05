// ============================================================
// transacciones.js — Transacciones y Sanciones
// ============================================================
import './sidebar.js';
import { mostrarModal } from './sidebar.js';    
import { getTransacciones, crearTransaccion, eliminarTransaccion, modificarTransaccion, BASE_URL } from './api.js';
// const EJEMPLO = [
//     { id: 1, prestamo: 2, atendidoPor: 'admin', mora: 3.75, fecha: '2026-05-21', detalle: 'Cobro de multa por entrega tardía' },
//     { id: 2, prestamo: 1, atendidoPor: 'admin', mora: 0.00, fecha: '2026-05-14', detalle: 'Emisión de ticket - Sin cargos'    },
// ];
const Titulo = document.getElementById('titulo-formulario');
const FormRegistrar = document.getElementById('form-registrar');
const FormEliminar = document.getElementById('form-eliminar');
const FormModificar = document.getElementById('form-modificar');
mostrarFormulario('registrar');


async function cargarTabla() {
    let lista;
    try {
        lista = await getTransacciones();
    } catch {
        lista = [];
    }

    if ($.fn.DataTable.isDataTable('#tabla-transacciones')) {
        $('#tabla-transacciones').DataTable().destroy();
    }
//libro? estudiante? usuario? prestamo? —> para mostrar en tabla ? signifiac que puede ser null, y el ?? '—' es para mostrar un guion si es null
    //to fixed(2) para mostrar 2 decimales en la mora
    document.getElementById('tabla-transacciones').querySelector('tbody').innerHTML = lista.map(t => `
        <tr>
            <td>${t.IdTransaccion}</td>
            <td>${t.prestamo?.estudiante?.nombre ?? 'N/A'} ${t.prestamo?.estudiante?.apellido ?? ''}</td>
            <td>${t.prestamo?.libro?.titulo ?? 'N/A'}</td>
            <td>${t.usuario?.nombreUsuario ?? 'N/A'}</td>
            <td>${t.mora.toFixed(2)}</td>
            <td>${t.fechaTransaccion}</td>
            <td>${t.detalleTransaccion}</td>
        </tr>
    `).join('');

    $('#tabla-transacciones').DataTable({ pageLength: 10 });
}

document.getElementById('btn-guardar-transaccion').addEventListener('click', async () => {
    const usuario = sessionStorage.getItem('usuarioActivo');
    const data = {
        idPrestamo:         parseInt(document.getElementById('tra-prestamo').value),
        idUsuario:          usuario,
        mora:               parseFloat(document.getElementById('tra-mora').value) || 0,
        detalleTransaccion: document.getElementById('tra-detalle').value.trim(),
        fechaTransaccion:   new Date().toISOString().slice(0, 19).replace('T', ' ') //toISOSTRING enviar fecha en formato compatible (yyyy-mm-dd hh:mm:ss)
    };
    
    if (!data.idPrestamo) return mostrarModal('ID de Préstamo es requerido.');
    try {
        await crearTransaccion(data);
        mostrarModal('Transacción registrada correctamente.');
        cargarTabla();
    } catch {
        mostrarModal('Backend no disponible aún. La transacción no fue guardada.');
    }
});


//limpiar formularios
document.getElementById('btn-limpiar-transaccion').addEventListener('click', () => {
    ['tra-prestamo','tra-mora','tra-detalle'].forEach(id => document.getElementById(id).value = '');
});

document.getElementById('btn-limpiar-modificar').addEventListener('click', () => {
    ['mod-id','mod-mora','mod-detalle']
        .forEach(id => document.getElementById(id).value = '');
});

cargarTabla();


//eliminar y modificar
// Eliminar transaccion
    document.getElementById('btn-confirmar-eliminar').addEventListener('click', async () => {
        const id = document.getElementById('elim-id').value;
        if (!id) return mostrarModal('Ingresa un ID.');
        if (!confirm(`¿Eliminar transacción ${id}?`)) return;
        const catchError = await fetch(`${BASE_URL}/transaccion/${id}`, { method: 'DELETE' });
        if (catchError.status === 500) {
            return mostrarModal('No se puede eliminar esta transacción.');
        }
        mostrarModal('Eliminado correctamente.');
        cargarTabla();
    });

    // Modificar transaccion
    document.getElementById('btn-guardar-modificar').addEventListener('click', async () => {
        const id = document.getElementById('mod-id').value;
        if (!id) return mostrarModal('Ingresa un ID.');
        const data = {
            mora:               parseFloat(document.getElementById('mod-mora').value) || 0,
            detalleTransaccion: document.getElementById('mod-detalle').value.trim(),
        };
        try {
            await modificarTransaccion(id, data);
            mostrarModal('Modificado correctamente.');
            cargarTabla();
        } catch {
            mostrarModal('Error al modificar.');
        }
    });




            //cual es el formulario a mostrar
function mostrarFormulario(cual) {
            FormRegistrar.style.display = 'none';
            FormModificar.style.display = 'none';
            FormEliminar.style.display  = 'none';

            if (cual === 'registrar') {
                FormRegistrar.style.display = 'block'; //block mostrar formulario
                Titulo.textContent = 'Registrar Transacción';
            } else if (cual === 'modificar') {
                FormModificar.style.display = 'block';
                Titulo.textContent = 'Modificar Transacción';
            } else if (cual === 'eliminar') {
                FormEliminar.style.display  = 'block';
                Titulo.textContent = 'Eliminar Transacción';
            }
        }

        // Vincular botones
        document.getElementById('btn-registrar').addEventListener('click', () => mostrarFormulario('registrar'));
        document.getElementById('btn-eliminar').addEventListener('click',  () => mostrarFormulario('eliminar'));
        document.getElementById('btn-modificar').addEventListener('click', () => mostrarFormulario('modificar'));
