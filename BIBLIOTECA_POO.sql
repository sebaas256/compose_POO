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

-- Tabla de Estudiantes
create table Estudiante (
    IDEstudiante int identity(1,1) not null,
    Nombre varchar(50) not null,
    Apellido varchar(50) not null,
    Genero varchar(10),
    Edad int,
    Email varchar(100),
    ClaveAcceso varchar(20)
);
go

alter table Estudiante
add constraint PKEstudiante primary key (IDEstudiante);
go

--  Libros
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

-- Préstamo
create table Prestamo (
    IDPrestamo int identity(1,1) not null,
    IDEstudiante int not null,
    IDLibro int not null,
    FechaSalida datetime default getdate(),
    FechaMaxDevolucion datetime not null,
    FechaEntrega datetime null,
    Estado varchar(20) -- 'activo', 'devuelto', 'mora'
);
go

alter table Prestamo
add constraint PKPrestamo primary key (IDPrestamo);
go

-- Transacciones y Sanciones
create table Transaccion (
    IDTransaccion int identity(1,1) not null,
    IDPrestamo int not null,
    Mora decimal(10,2) default 0.00,
    FechaTransaccion datetime default getdate(),
    DetalleTransaccion varchar(200)
);
go

alter table Transaccion
add constraint PKTransaccion primary key (IDTransaccion);
go

--- LLAVES FORÁNEAS ---

alter table Prestamo
add constraint FKPrestamoEstudiante
foreign key (IDEstudiante)
references Estudiante(IDEstudiante);
go

alter table Prestamo
add constraint FKPrestamoLibro
foreign key (IDLibro)
references libro(IDLibro);
go

alter table Transaccion
add constraint FKTransaccionPrestamo
foreign key (IDPrestamo)
references Prestamo(IDPrestamo);
go

select * from Estudiante
select * from Libro
select * from Prestamo
select * from Transaccion