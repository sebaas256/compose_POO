use master;
go

if exists (select name from sys.databases where name = 'BIBLIOTECA')
begin
    drop database BIBLIOTECA;
end
go

create database BIBLIOTECA;
go

use BIBLIOTECA;
go

-- ==========================================
-- 1. TABLA PARA EL LOGIN GERENCIAL / PERSONAL
-- ==========================================
create table Usuario (
    idusuario int identity(1,1) not null,
    nombre_completo varchar(100) not null,
    nombre_usuario varchar(50) not null unique,
    password varchar(255) not null, -- En producción se recomienda encriptar
    rol varchar(30) default 'Bibliotecario' -- Ej: 'Administrador', 'Bibliotecario'
);
go

alter table Usuario
add constraint PKUsuario primary key (IDUsuario);
go

-- ==========================================
-- 2. TABLAS DEL NEGOCIO (BIBLIOTECA)
-- ==========================================

-- Tabla de Estudiantes
create table Estudiante (
    IDEstudiante int identity(1,1) not null,
    Nombre varchar(50) not null,
    Apellido varchar(50) not null,
    Genero varchar(10),
    Edad int,
    Email varchar(100),
    ClaveAcceso varchar(20) -- Para el acceso de los alumnos
);
go

alter table Estudiante
add constraint PKEstudiante primary key (IDEstudiante);
go

-- Tabla de Libros
create table Libro (
    IDLibro int identity(1,1) not null,
    Codigo varchar(20) not null,
    Titulo varchar(150) not null,
    Autor varchar(100),
    Editorial varchar(100),
    GeneroLibro varchar(50),
    Stock int not null,
    Disponibilidad bit default 1
);
go

alter table Libro
add constraint PKLibro primary key (IDLibro);
go

-- Tabla de Préstamo (Incluye trazabilidad del usuario)
create table Prestamo (
    IDPrestamo int identity(1,1) not null,
    IDEstudiante int not null,
    IDLibro int not null,
    IDUsuario int not null, -- Bibliotecario que procesa el préstamo
    FechaSalida datetime default getdate(),
    FechaMaxDevolucion datetime not null,
    FechaEntrega datetime null,
    Estado varchar(20) -- 'activo', 'devuelto', 'mora'
);
go

alter table Prestamo
add constraint PKPrestamo primary key (IDPrestamo);
go

-- Tabla de Transacciones y Sanciones (Incluye trazabilidad del usuario)
create table Transaccion (
    IDTransaccion int identity(1,1) not null,
    IDPrestamo int not null,
    IDUsuario int not null, -- Personal que registra o cobra la mora
    Mora decimal(10,2) default 0.00,
    FechaTransaccion datetime default getdate(),
    DetalleTransaccion varchar(200)
);
go

alter table Transaccion
add constraint PKTransaccion primary key (IDTransaccion);
go

-- ==========================================
-- 3. DEFINICIÓN DE LLAVES FORÁNEAS
-- ==========================================

-- Relaciones de la tabla Prestamo
alter table Prestamo
add constraint FKPrestamoEstudiante
foreign key (IDEstudiante)
references Estudiante(IDEstudiante);
go

alter table Prestamo
add constraint FKPrestamoLibro
foreign key (IDLibro)
references Libro(IDLibro);
go

alter table Prestamo
add constraint FKPrestamoUsuario
foreign key (IDUsuario)
references Usuario(IDUsuario);
go

-- Relaciones de la tabla Transaccion
alter table Transaccion
add constraint FKTransaccionPrestamo
foreign key (IDPrestamo)
references Prestamo(IDPrestamo);
go

alter table Transaccion
add constraint FKTransaccionUsuario
foreign key (IDUsuario)
references Usuario(IDUsuario);
go

-- ==========================================
-- 5. CONSULTAS DE VERIFICACIÓN
-- ==========================================
select * from Usuario;
select * from Estudiante;
select * from Libro;
select * from Prestamo;
select * from Transaccion;
go

