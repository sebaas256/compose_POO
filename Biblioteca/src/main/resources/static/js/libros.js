// ============================================================
// libros.js — Gestión de Libros
// ============================================================
import './sidebar.js';
import { getLibros, crearLibro } from './api.js';

// ── Datos de ejemplo (eliminar cuando el backend esté listo) ──
const EJEMPLO = [
    { id: 1, codigo: 'LIB-001', titulo: 'Java a Fondo',    autor: 'Sznajdleder', editorial: 'Alfaomega', genero: 'Tecnología', stock: 5, disponible: true  },
    { id: 2, codigo: 'LIB-002', titulo: 'Clean Code',      autor: 'R. C. Martin', editorial: 'Prentice', genero: 'Tecnología', stock: 3, disponible: true  },
    { id: 3, codigo: 'LIB-003', titulo: 'CCNA 200-301',    autor: 'Wendell Odom', editorial: 'Cisco',    genero: 'Redes',      stock: 0, disponible: false },
    { id: 4, codigo: 'LIB-004', titulo: 'Cuentos de Barro',autor: 'Salarrué',     editorial: 'Clásicos', genero: 'Literatura', stock: 8, disponible: true  },
];

async function cargarTabla() {
    let lista;
    try {
        lista = await getLibros();
    } catch {
        lista = EJEMPLO;
    }
    document.getElementById('tabla-libros').innerHTML = lista.map(l => `
        <tr>
            <td>${l.id}</td>
            <td>${l.codigo}</td>
            <td>${l.titulo}</td>
            <td>${l.autor}</td>
            <td>${l.editorial}</td>
            <td>${l.genero}</td>
            <td>${l.stock}</td>
            <td>${l.disponible
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
