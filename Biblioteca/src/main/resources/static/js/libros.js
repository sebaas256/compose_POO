// ============================================================
// libros.js — Gestión de Libros
// ============================================================
import './sidebar.js';
import { getLibros, crearLibro, eliminarLibro, modificarLibro } from './api.js'; //api.js es el archivo donde se hacen las llamadas al backend, se importa para usar sus funciones

const Titulo = document.getElementById('titulo-formulario');
const FormRegistrar = document.getElementById('form-registrar');
const FormEliminar = document.getElementById('form-eliminar');
const FormModificar = document.getElementById('form-modificar');

// ── Datos de ejemplo
const EJEMPLO = [
    { idLibro: 1, codigo: 'LB001', titulo: 'El Quijote', autor: 'Miguel de Cervantes', editorial: 'Editorial A', generoLibro: 'Novela', stock: 5, disponibilidad: true },
    { idLibro: 2, codigo: 'LB002', titulo: 'Cien Años de Soledad', autor: 'Gabriel García Márquez', editorial: 'Editorial B', generoLibro: 'Realismo Mágico', stock: 0, disponibilidad: false },
    { idLibro: 3, codigo: 'LB003', titulo: 'La Sombra del Viento', autor: 'Carlos Ruiz Zafón', editorial: 'Editorial C', generoLibro: 'Misterio', stock: 3, disponibilidad: true }
];
// ───────────────────────────────────────────────────────────────

async function cargarTabla() {
    let lista;
    try {
        lista = await getLibros();
        console.log("lista cargada");  
    } catch {
        lista = EJEMPLO;
        console.log("xd");  
    }
    document.getElementById('tabla-libros').innerHTML = lista.map(l => `
        <tr>
            <td>${l.idLibro}</td>
            <td>${l.codigo}</td>
            <td>${l.titulo}</td>
            <td>${l.autor}</td>
            <td>${l.editorial}</td>
            <td>${l.generoLibro}</td>
            <td>${l.stock}</td>
            <td>${l.stock > 0
                ? '<span class="badge badge--verde">Disponible</span>'
                : '<span class="badge badge--rojo">Sin stock</span>'}</td>
        </tr>
    `).join('');
}

// ── Guardar libro ─────────────────────────────────────────────
document.getElementById('btn-guardar-libro').addEventListener('click', async () => {
    const data = {
        codigo:      document.getElementById('lib-codigo').value.trim(),
        titulo:      document.getElementById('lib-titulo').value.trim(),
        autor:       document.getElementById('lib-autor').value.trim(),
        editorial:   document.getElementById('lib-editorial').value.trim(),
        generoLibro: document.getElementById('lib-genero').value,
        stock:       parseInt(document.getElementById('lib-stock').value) || 0,
        disponibilidad: parseInt(document.getElementById('lib-stock').value) > 0
        // disponibilidad: document.getElementById('lib-disponibilidad').checked
    };
    if (!data.codigo || !data.titulo) return alert('Código y Título son requeridos.');
    try {
        await crearLibro(data); // TODO: conectar cuando el backend esté listo
        alert('Libro guardado correctamente.');
        cargarTabla();
    } catch {
        alert('Backend no disponible aún. El libro no fue guardado.');
    }
});

document.getElementById('btn-limpiar-libro').addEventListener('click', () => {
    ['lib-codigo','lib-titulo','lib-autor','lib-editorial','lib-genero','lib-stock']
        .forEach(id => document.getElementById(id).value = '');
});

cargarTabla();


//botones de modificar y eliminar libros (sin funcionalidad aún)

        document.getElementById('btn-confirmar-eliminar').addEventListener('click', async () => {
            const id = document.getElementById('elim-id').value;
            if (!id) return alert('Ingresa un ID.');
            if (!confirm(`¿Eliminar libro ${id}?`)) return;
            try {
                await eliminarLibro(id);
                alert('Eliminado correctamente.');
                cargarTabla();
            } catch {
                alert('Error al eliminar.');
            }
        });

        //btn modificar libro
        document.getElementById('btn-guardar-modificar').addEventListener('click', async () => {
            const id = document.getElementById('mod-id').value;
            if (!id) return alert('Ingresa un ID.');
            const data = {
                codigo:      document.getElementById('mod-codigo').value.trim(),
                titulo:      document.getElementById('mod-titulo').value.trim(),
                autor:       document.getElementById('mod-autor').value.trim(),
                editorial:   document.getElementById('mod-editorial').value.trim(),
                generoLibro: document.getElementById('mod-genero').value,
                stock:       parseInt(document.getElementById('mod-stock').value) || 0,
                disponibilidad: parseInt(document.getElementById('mod-stock').value) > 0
                // disponibilidad: document.getElementById('mod-disponibilidad').checked
            };
            try {
                await modificarLibro(id, data);
                alert('Modificado correctamente.');
                cargarTabla();
            } catch {
                alert('Error al modificar.');
            }
        });


        //cual es el formulario a mostrar
        function mostrarFormulario(cual) {
            FormRegistrar.style.display = 'none';
            FormModificar.style.display = 'none';
            FormEliminar.style.display  = 'none';

            if (cual === 'registrar') {
                FormRegistrar.style.display = 'block'; //block mostrar formulario
                Titulo.textContent = 'Registrar Nuevo Libro';
            } else if (cual === 'modificar') {
                FormModificar.style.display = 'block';
                Titulo.textContent = 'Modificar Libro';
            } else if (cual === 'eliminar') {
                FormEliminar.style.display  = 'block';
                Titulo.textContent = 'Eliminar Libro';
            }
        }

        // Vincular botones
        document.getElementById('btn-registrar').addEventListener('click', () => mostrarFormulario('registrar'));
        document.getElementById('btn-eliminar').addEventListener('click',  () => mostrarFormulario('eliminar'));
        document.getElementById('btn-modificar').addEventListener('click', () => mostrarFormulario('modificar'));
