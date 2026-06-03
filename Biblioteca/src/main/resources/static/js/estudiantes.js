// ============================================================
// estudiantes.js — Gestión de Estudiantes
// ============================================================

// imports
import './sidebar.js';
import { mostrarModal } from './sidebar.js';
import { getEstudiantes, crearEstudiante, eliminarEstudiante, modificarEstudiante, BASE_URL } from './api.js';
console.log(typeof mostrarModal);

//consts
const FormRegistrar = document.getElementById('form-registrar');
const FormEliminar = document.getElementById('form-eliminar');
const FormModificar = document.getElementById('form-modificar');
const Titulo = document.getElementById('titulo-formulario'); 


//backend no respondia
console.log(document.getElementById('btn-confirmar-eliminar'));
console.log(document.getElementById('btn-guardar-modificar'));
console.log('estudiantes.js cagado');
// ============================================================

// Datos de ejemplo para mostrar en la tabla si el backend no responde
const EJEMPLO = [
    { id: 1, nombre: 'Rodrigo',  apellido: 'Pineda',   genero: 'M', edad: 20, email: 'rodrigo@mail.com'  },
    { id: 2, nombre: 'Valeria',  apellido: 'Guzman',   genero: 'F', edad: 22, email: 'valeria@mail.com'  },
    { id: 3, nombre: 'Josue',    apellido: 'Henriquez', genero: 'M', edad: 21, email: 'josue@mail.com'    },
    { id: 4, nombre: 'Adriana',  apellido: 'Orellana', genero: 'F', edad: 19, email: 'adriana@mail.com'  },
];
//async 
async function cargarTabla() {
    let lista;
    try {
        lista = await getEstudiantes();
    } catch {
        lista = EJEMPLO;
    }

    // Destruir DataTable si ya existe
    if ($.fn.DataTable.isDataTable('#tabla-estudiantes')) {
        $('#tabla-estudiantes').DataTable().destroy();
    }

    // Llenar la tabla primerop
    document.getElementById('tabla-estudiantes').querySelector('tbody').innerHTML = lista.map(e => `
        <tr>
            <td>${e.idEstudiante}</td>
            <td>${e.nombre}</td>
            <td>${e.apellido}</td>
            <td>${e.genero}</td>            
            <td>${e.Edad}</td>
            <td>${e.email}</td>
        </tr>
    `).join('');

    // Inicializar DataTable 
    $('#tabla-estudiantes').DataTable({
        pageLength: 20
    });

}

//btn guardar estudiante
document.getElementById('btn-guardar-estudiante').addEventListener('click', async () => {
    const data = {
        nombre:      document.getElementById('est-nombre').value.trim(),
        apellido:    document.getElementById('est-apellido').value.trim(),
        genero:      document.getElementById('est-genero').value,
        edad:        parseInt(document.getElementById('est-edad').value) || 0,
        email:       document.getElementById('est-email').value.trim(),
        claveAcceso: document.getElementById('est-clave').value.trim(),
    };
    if (!data.nombre || !data.apellido) return mostrarModal('Nombre y Apellido son requeridos.');
    try {
        await crearEstudiante(data);
        mostrarModal('Estudiante guardado correctamente.');
        cargarTabla();
    } catch {
        mostrarModal('Backend no disponible aún. El estudiante no fue guardado.');
    }
});

//clean form
document.getElementById('btn-limpiar-estudiante').addEventListener('click', () => {
    ['est-nombre','est-apellido','est-genero','est-edad','est-email','est-clave']
        .forEach(id => document.getElementById(id).value = '');
});
document.getElementById('btn-limpiar-modificar').addEventListener('click', () => {
        ['mod-id',
        'mod-nombre',
        'mod-apellido',
        'mod-genero','mod-edad'
        ,'mod-email',
        'mod-clave']
        .forEach(id => document.getElementById(id).value = '');
});

//btn eliminar estudiante
// no se borra por relacion con llaves foraneas a prestamos, 
document.getElementById('btn-confirmar-eliminar').addEventListener('click', async () => {
    const id = document.getElementById('elim-id').value;
    if (!id) return alert('Ingresa un ID.');
    if (!confirm(`¿Eliminar estudiante ${id}?`)) return;
    const catchError = await fetch(`${BASE_URL}/estudiantes/${id}`, { method: 'DELETE' });
    if (catchError.status === 500) {
        return mostrarModal('No se puede eliminar el estudiante porque tiene préstamos asociados.');
    }
    mostrarModal('Estudiante eliminado correctamente.');
    cargarTabla();
});
//btn modificar estudiante
document.getElementById('btn-guardar-modificar').addEventListener('click', async () => {
    const id = document.getElementById('mod-id').value;
    if (!id) return alert('Ingresa un ID.');
    const data = {
        nombre:   document.getElementById('mod-nombre').value.trim(),
        apellido: document.getElementById('mod-apellido').value.trim(),
        genero:   document.getElementById('mod-genero').value,
        edad:     parseInt(document.getElementById('mod-edad').value) || 0,
        email:    document.getElementById('mod-email').value.trim(),
        claveAcceso: document.getElementById('mod-clave').value.trim(),
    };
    try {
        await modificarEstudiante(id, data);
        alert('Modificado correctamente.');
        cargarTabla();
    } catch {
        alert('Error al modificar.');
    }
});
cargarTabla();

//cual es el formulario a mostrar
function mostrarFormulario(cual) {
    FormRegistrar.style.display = 'none';
    FormModificar.style.display = 'none';
    FormEliminar.style.display  = 'none';

    if (cual === 'registrar') {
        FormRegistrar.style.display = 'block'; //block mostrar formulario
        Titulo.textContent = 'Registrar Nuevo Estudiante';
    } else if (cual === 'modificar') {
        FormModificar.style.display = 'block';
        Titulo.textContent = 'Modificar Estudiante';
    } else if (cual === 'eliminar') {
        FormEliminar.style.display  = 'block';
        Titulo.textContent = 'Eliminar Estudiante';
    }
}

// Vincular botones
document.getElementById('btn-registrar').addEventListener('click', () => mostrarFormulario('registrar'));
document.getElementById('btn-eliminar').addEventListener('click',  () => mostrarFormulario('eliminar'));
document.getElementById('btn-modificar').addEventListener('click', () => mostrarFormulario('modificar'));
