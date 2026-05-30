// ============================================================
// api.js — Llamadas al backend
// Importar en cada vista: import { getLibros } from './api.js';
// ============================================================

const BASE_URL = 'http://localhost:8080/api';

// ── Autenticación ─────────────────────────────────────────────
// TODO (Backend): POST /api/login
// Body:     { nombreUsuario, password }
// Respuesta: { Estado: "Completado", nombreUsuario, rol } | { Estado: "Error", Mensaje }
export async function login(nombreUsuario, password) {
    const res = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombreUsuario, password })
    });
    return res.json();
}

// ── Dashboard ─────────────────────────────────────────────────
// TODO (Backend): GET /api/dashboard/metricas
// Respuesta: { totalEjemplares, prestamosActivos, enMora, totalRecaudado }
export async function getMetricas() {
    const res = await fetch(`${BASE_URL}/dashboard/metricas`);
    return res.json();
}

// TODO (Backend): GET /api/dashboard/ultimos-prestamos
// Respuesta: [ { estudiante, libro, atendidoPor, estado, multa, detalle } ]
export async function getUltimosPrestamos() {
    const res = await fetch(`${BASE_URL}/dashboard/ultimos-prestamos`);
    return res.json();
}

// ── Libros ────────────────────────────────────────────────────
// TODO (Backend): GET /api/libros
export async function getLibros() {
    const res = await fetch(`${BASE_URL}/libros`);
    return res.json();
}

// TODO (Backend): POST /api/libros
// Body: { codigo, titulo, autor, editorial, generoLibro, stock }
export async function crearLibro(data) {
    const res = await fetch(`${BASE_URL}/libros`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
}
// delete /api/libros/{id}
// TODO (Backend): DELETE /api/libros/{id}
export async function eliminarLibro(id) {
    const res = await fetch(`${BASE_URL}/libros/${id}`, { method: 'DELETE' });
    return res.text();
}

export async function modificarLibro(id, data) {
    const res = await fetch(`${BASE_URL}/libros/${id}`, {
        method: 'PUT', //pPUT viene de "update" y se usa para modificar recursos existentes que vienen de libros/{id}
        headers: { 'Content-Type': 'application/json' }, //
        body: JSON.stringify(data)
    });
    return res.text();
}
// ── Estudiantes ───────────────────────────────────────────────
// TODO (Backend): GET /api/estudiantes
export async function getEstudiantes() {
    const res = await fetch(`${BASE_URL}/estudiantes`);
    return res.json();
}

// TODO (Backend): POST /api/estudiantes
// Body: { nombre, apellido, genero, edad, email, claveAcceso }
export async function crearEstudiante(data) {
    const res = await fetch(`${BASE_URL}/estudiantes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
}
// TODO (Backend): DELETE /api/estudiantes/{id}
export async function eliminarEstudiante(id) {
    const res = await fetch(`${BASE_URL}/estudiantes/${id}`, {
        method: 'DELETE'
    });
    return res.text();
}

// PUT /api/estudiantes/{id}
export async function modificarEstudiante(id, data) {
    const res = await fetch(`${BASE_URL}/estudiantes/${id}`, { //
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.text();
}

// ── Préstamos ─────────────────────────────────────────────────
// TODO (Backend): GET /api/prestamos
export async function getPrestamos() {
    const res = await fetch(`${BASE_URL}/prestamos`);
    return res.json();
}

// TODO (Backend): POST /api/prestamos
// Body: { idEstudiante, idLibro, idUsuario, fechaMaxDevolucion }
export async function crearPrestamo(data) {
    const res = await fetch(`${BASE_URL}/prestamos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
}

// ── Transacciones ─────────────────────────────────────────────
// TODO (Backend): GET /api/transacciones
export async function getTransacciones() {
    const res = await fetch(`${BASE_URL}/transacciones`);
    return res.json();
}

// TODO (Backend): POST /api/transacciones
// Body: { idPrestamo, idUsuario, mora, detalleTransaccion }
export async function crearTransaccion(data) {
    const res = await fetch(`${BASE_URL}/transacciones`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return res.json();
}
