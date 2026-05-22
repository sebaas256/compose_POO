// ============================================================
// estudiantes.js — Gestión de Estudiantes
// ============================================================
import './sidebar.js';
import { getEstudiantes, crearEstudiante } from './api.js';

const EJEMPLO = [
    { id: 1, nombre: 'Rodrigo',  apellido: 'Pineda',   genero: 'M', edad: 20, email: 'rodrigo@mail.com'  },
    { id: 2, nombre: 'Valeria',  apellido: 'Guzman',   genero: 'F', edad: 22, email: 'valeria@mail.com'  },
    { id: 3, nombre: 'Josue',    apellido: 'Henriquez', genero: 'M', edad: 21, email: 'josue@mail.com'    },
    { id: 4, nombre: 'Adriana',  apellido: 'Orellana', genero: 'F', edad: 19, email: 'adriana@mail.com'  },
];

async function cargarTabla() {
    let lista;
    try {
        lista = await getEstudiantes();
    } catch {
        lista = EJEMPLO;
    }
    document.getElementById('tabla-estudiantes').innerHTML = lista.map(e => `
        <tr>
            <td>${e.id}</td>
            <td>${e.nombre}</td>
            <td>${e.apellido}</td>
            <td>${e.genero === 'M' ? 'Masculino' : 'Femenino'}</td>
            <td>${e.edad}</td>
            <td>${e.email}</td>
        </tr>
    `).join('');
}

document.getElementById('btn-guardar-estudiante').addEventListener('click', async () => {
    const data = {
        nombre:      document.getElementById('est-nombre').value.trim(),
        apellido:    document.getElementById('est-apellido').value.trim(),
        genero:      document.getElementById('est-genero').value,
        edad:        parseInt(document.getElementById('est-edad').value) || 0,
        email:       document.getElementById('est-email').value.trim(),
        claveAcceso: document.getElementById('est-clave').value.trim(),
    };
    if (!data.nombre || !data.apellido) return alert('Nombre y Apellido son requeridos.');
    try {
        await crearEstudiante(data);
        alert('Estudiante guardado correctamente.');
        cargarTabla();
    } catch {
        alert('Backend no disponible aún. El estudiante no fue guardado.');
    }
});

document.getElementById('btn-limpiar-estudiante').addEventListener('click', () => {
    ['est-nombre','est-apellido','est-genero','est-edad','est-email','est-clave']
        .forEach(id => document.getElementById(id).value = '');
});

cargarTabla();
