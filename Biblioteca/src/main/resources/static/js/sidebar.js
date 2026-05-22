// ============================================================
// sidebar.js — Sidebar compartido
// Importar en cada vista: import './sidebar.js';
// ============================================================

const PAGINAS = [
    { href: 'dashboard.html',     icono: '<img src="img/dashboard.ico">', label: 'Panel Gerencial'  },
    { href: 'libros.html',        icono: '<img src="img/libros.ico">', label: 'Libros'           },
    { href: 'estudiantes.html',   icono: '<img src="img/estudiantes.ico">', label: 'Estudiantes'      },
    { href: 'prestamos.html',     icono: '<img src="img/prestamos.ico">', label: 'Préstamos'        },
    { href: 'transacciones.html', icono: '<img src="img/transacciones.ico">', label: 'Transacciones'    },
];
// ── Protección de ruta ────────────────────────────────────────
const usuario = sessionStorage.getItem('usuarioActivo');
if (!usuario) window.location.href = 'index.html';
 
// ── Generar HTML del sidebar completo ─────────────────────────
const paginaActual = location.pathname.split('/').pop();
 
document.getElementById('sidebar').innerHTML = `
    <div class="sidebar__logo">
            <img src="img/logo.png" style="width:52px;height:52px;margin:0 auto 10px;display:block;">
        Sistema de Información<br>Gerencial para Biblioteca
    </div>
 
    <nav class="sidebar__nav">
        ${PAGINAS.map(p => `
            <a href="${p.href}" class="${p.href === paginaActual ? 'activo' : ''}">
                <span class="icono">${p.icono}</span> ${p.label}
            </a>
        `).join('')}
    </nav>
 
    <div class="sidebar__footer">
        Atiende: <strong>${usuario}</strong><br>
        <a href="#" id="btn-cerrar-sesion" style="color:#e74c3c;font-size:0.8rem;text-decoration:none;margin-top:8px;display:inline-block;">
            ↩ Cerrar sesión
        </a>
    </div>
`;
// Agregar botón toggle al layout
document.querySelector('.contenido-principal').insertAdjacentHTML('beforebegin', `
    <button id="btn-toggle" style="
        position:fixed; top:16px; left:16px; z-index:999;
        background:var(--color-azul); border:none; border-radius:6px;
        color:var(--color-texto-principal); font-size:1.2rem; cursor:pointer;
        width:36px; height:36px; line-height:36px; text-align:center;
    ">☰</button>
`);

document.getElementById('btn-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('sidebar--oculto');
});

// ── Cerrar sesión ─────────────────────────────────────────────
document.getElementById('btn-cerrar-sesion').addEventListener('click', () => {
    sessionStorage.clear();
    window.location.href = 'index.html';
});
