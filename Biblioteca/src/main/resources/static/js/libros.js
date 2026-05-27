// ============================================================
// libros.js — Gestión de Libros
// ============================================================
import './sidebar.js';
import { getLibros, crearLibro } from './api.js';

// ── Datos de ejemplo (eliminar cuando el backend esté listo) ──


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
            <td>${l.disponibilidad
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
