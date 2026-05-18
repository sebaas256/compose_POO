use BIBLIOTECA;
go


use BIBLIOTECA;
go

-- Insertando 100 estudiantes con dominio @itca.edu.sv
insert into Estudiante (Nombre, Apellido, Genero, Edad, Email, ClaveAcceso) values
('Rodrigo', 'Pineda', 'Masculino', 20, 'rodrigo.pineda@itca.edu.sv', 'itca2024'),
('Valeria', 'Guzman', 'Femenino', 19, 'valeria.guzman@itca.edu.sv', 'v_guzman1'),
('Josue', 'Henriquez', 'Masculino', 22, 'josue.henriquez@itca.edu.sv', 'itca123'),
('Adriana', 'Orellana', 'Femenino', 21, 'adriana.orellana@itca.edu.sv', 'adri21'),
('Kevin', 'Barillas', 'Masculino', 23, 'kevin.barillas@itca.edu.sv', 'k.barillas'),
('Mariela', 'Escobar', 'Femenino', 20, 'mariela.escobar@itca.edu.sv', 'm_escobar'),
('Diego', 'Quintanilla', 'Masculino', 24, 'diego.quintanilla@itca.edu.sv', 'd_q77'),
('Camila', 'Villatoro', 'Femenino', 18, 'camila.villatoro@itca.edu.sv', 'cami_v'),
('Mauricio', 'Carcamo', 'Masculino', 25, 'mauricio.carcamo@itca.edu.sv', 'itca01'),
('Ximena', 'Portillo', 'Femenino', 21, 'ximena.portillo@itca.edu.sv', 'x_portillo'),
('Fernando', 'Mejia', 'Masculino', 20, 'fernando.mejia@itca.edu.sv', 'itca99'),
('Sofia', 'Rivas', 'Femenino', 19, 'sofia.rivas@itca.edu.sv', 'sofia.r'),
('Bryan', 'Guardado', 'Masculino', 22, 'bryan.guardado@itca.edu.sv', 'itca2022'),
('Estefany', 'Mendoza', 'Femenino', 23, 'estefany.mendoza@itca.edu.sv', 'mendoza_e'),
('Ricardo', 'Argueta', 'Masculino', 21, 'ricardo.argueta@itca.edu.sv', 'r_argueta'),
('Natalia', 'Lemus', 'Femenino', 20, 'natalia.lemus@itca.edu.sv', 'lemus2024'),
('Samuel', 'Avalos', 'Masculino', 24, 'samuel.avalos@itca.edu.sv', 's.avalos'),
('Daniela', 'Serrano', 'Femenino', 19, 'daniela.serrano@itca.edu.sv', 'dani_s'),
('Eduardo', 'Vasquez', 'Masculino', 22, 'eduardo.vasquez@itca.edu.sv', 'v_eduardo'),
('Paola', 'Interiano', 'Femenino', 21, 'paola.interiano@itca.edu.sv', 'paola_i'),
('Gerardo', 'Melendez', 'Masculino', 25, 'gerardo.melendez@itca.edu.sv', 'itca_gm'),
('Gabriela', 'Solorzano', 'Femenino', 20, 'gabriela.solorzano@itca.edu.sv', 'gabi_s'),
('Jonathan', 'Perez', 'Masculino', 23, 'jonathan.perez@itca.edu.sv', 'perez_j'),
('Andrea', 'Gomez', 'Femenino', 18, 'andrea.gomez@itca.edu.sv', 'itca2025'),
('Oscar', 'Canales', 'Masculino', 22, 'oscar.canales@itca.edu.sv', 'o_canales'),
('Claudia', 'Castillo', 'Femenino', 24, 'claudia.castillo@itca.edu.sv', 'c_castillo'),
('Roberto', 'Sosa', 'Masculino', 21, 'roberto.sosa@itca.edu.sv', 'rsosa21'),
('Monica', 'Pena', 'Femenino', 20, 'monica.pena@itca.edu.sv', 'm_pena'),
('Carlos', 'Duarte', 'Masculino', 23, 'carlos.duarte@itca.edu.sv', 'itca_cd'),
('Fatima', 'Cortez', 'Femenino', 19, 'fatima.cortez@itca.edu.sv', 'fati_c'),
('Miguel', 'Ramos', 'Masculino', 21, 'miguel.ramos@itca.edu.sv', 'm_ramos'),
('Tatiana', 'Zeledon', 'Femenino', 22, 'tatiana.zeledon@itca.edu.sv', 'itca_tz'),
('Nelson', 'Chicas', 'Masculino', 20, 'nelson.chicas@itca.edu.sv', 'n_chicas'),
('Beatriz', 'Avelar', 'Femenino', 24, 'beatriz.avelar@itca.edu.sv', 'b_avelar'),
('Erick', 'Jovel', 'Masculino', 21, 'erick.jovel@itca.edu.sv', 'e_jovel'),
('Rebeca', 'Zuniga', 'Femenino', 19, 'rebeca.zuniga@itca.edu.sv', 'r_zuniga'),
('Humberto', 'Molina', 'Masculino', 25, 'humberto.molina@itca.edu.sv', 'itca_hm'),
('Alejandra', 'Salazar', 'Femenino', 20, 'alejandra.salazar@itca.edu.sv', 'ale_s20'),
('David', 'Chavez', 'Masculino', 22, 'david.chavez@itca.edu.sv', 'd_chavez'),
('Isabel', 'Guerra', 'Femenino', 19, 'isabel.guerra@itca.edu.sv', 'itca_ig'),
('Walter', 'Figueroa', 'Masculino', 23, 'walter.figueroa@itca.edu.sv', 'itca_wf'),
('Melanie', 'Palacios', 'Femenino', 20, 'melanie.palacios@itca.edu.sv', 'm_palacios'),
('Alex', 'Alfaro', 'Masculino', 24, 'alex.alfaro@itca.edu.sv', 'a_alfaro'),
('Lorena', 'Bonilla', 'Femenino', 21, 'lorena.bonilla@itca.edu.sv', 'itca_lb'),
('Luis', 'Galvez', 'Masculino', 19, 'luis.galvez@itca.edu.sv', 'l_galvez'),
('Karla', 'Ramirez', 'Femenino', 22, 'karla.ramirez@itca.edu.sv', 'k_ramirez'),
('Javier', 'Luna', 'Masculino', 20, 'javier.luna@itca.edu.sv', 'itca_jl'),
('Sonia', 'Ortiz', 'Femenino', 24, 'sonia.ortiz@itca.edu.sv', 's_ortiz'),
('Emilio', 'Miranda', 'Masculino', 21, 'emilio.miranda@itca.edu.sv', 'itca_em'),
('Rocio', 'Linares', 'Femenino', 23, 'rocio.linares@itca.edu.sv', 'r_linares'),
('Marcos', 'Blanco', 'Masculino', 19, 'marcos.blanco@itca.edu.sv', 'm_blanco'),
('Elena', 'Fuentes', 'Femenino', 22, 'elena.fuentes@itca.edu.sv', 'itca_ef'),
('Hugo', 'Calderon', 'Masculino', 20, 'hugo.calderon@itca.edu.sv', 'h_calderon'),
('Cristina', 'Arias', 'Femenino', 25, 'cristina.arias@itca.edu.sv', 'itca_ca'),
('Raul', 'Montes', 'Masculino', 21, 'raul.montes@itca.edu.sv', 'r_montes'),
('Silvia', 'Marroquin', 'Femenino', 19, 'silvia.marroquin@itca.edu.sv', 's_marro'),
('Victor', 'Escalante', 'Masculino', 23, 'victor.escalante@itca.edu.sv', 'itca_ve'),
('Brenda', 'Zamora', 'Femenino', 20, 'brenda.zamora@itca.edu.sv', 'b_zamora'),
('Rene', 'Tobar', 'Masculino', 24, 'rene.tobar@itca.edu.sv', 'r_tobar'),
('Marta', 'Umana', 'Femenino', 21, 'marta.umana@itca.edu.sv', 'm_umana'),
('Armando', 'Estrada', 'Masculino', 20, 'armando.estrada@itca.edu.sv', 'itca_ae'),
('Vanessa', 'Navas', 'Femenino', 19, 'vanessa.navas@itca.edu.sv', 'v_navas'),
('Edwin', 'Benitez', 'Masculino', 22, 'edwin.benitez@itca.edu.sv', 'e_benitez'),
('Mirna', 'Pineda', 'Femenino', 23, 'mirna.pineda@itca.edu.sv', 'itca_mp'),
('Alvaro', 'Ochoa', 'Masculino', 21, 'alvaro.ochoa@itca.edu.sv', 'a_ochoa'),
('Doris', 'Rosales', 'Femenino', 20, 'doris.rosales@itca.edu.sv', 'd_rosales'),
('Francisco', 'Granados', 'Masculino', 24, 'francisco.granados@itca.edu.sv', 'itca_fg'),
('Yolanda', 'Sosa', 'Femenino', 19, 'yolanda.sosa@itca.edu.sv', 'y_sosa'),
('Mario', 'Zelaya', 'Masculino', 22, 'mario.zelaya@itca.edu.sv', 'm_zelaya'),
('Leticia', 'Batres', 'Femenino', 21, 'leticia.batres@itca.edu.sv', 'itca_lb2'),
('Gustavo', 'Herculez', 'Masculino', 25, 'gustavo.herculez@itca.edu.sv', 'itca_gh'),
('Sandra', 'Rivera', 'Femenino', 20, 'sandra.rivera@itca.edu.sv', 's_rivera'),
('Felipe', 'Aguilar', 'Masculino', 23, 'felipe.aguilar@itca.edu.sv', 'f_aguilar'),
('Juana', 'Guevara', 'Femenino', 18, 'juana.guevara@itca.edu.sv', 'j_guevara'),
('Pedro', 'Chacon', 'Masculino', 22, 'pedro.chacon@itca.edu.sv', 'itca_pc'),
('Rosa', 'Campos', 'Femenino', 24, 'rosa.campos@itca.edu.sv', 'r_campos'),
('Ignacio', 'Murillo', 'Masculino', 21, 'ignacio.murillo@itca.edu.sv', 'i_murillo'),
('Glenda', 'Alfaro', 'Femenino', 20, 'glenda.alfaro@itca.edu.sv', 'itca_ga'),
('Wilfredo', 'Flores', 'Masculino', 23, 'wilfredo.flores@itca.edu.sv', 'w_flores'),
('Iris', 'Alas', 'Femenino', 19, 'iris.alas@itca.edu.sv', 'i_alas'),
('Ruben', 'Montoya', 'Masculino', 21, 'ruben.montoya@itca.edu.sv', 'r_montoya'),
('Margarita', 'Bermudez', 'Femenino', 22, 'margarita.bermudez@itca.edu.sv', 'itca_mb'),
('Salvador', 'Vides', 'Masculino', 20, 'salvador.vides@itca.edu.sv', 's_vides'),
('Karen', 'Tejada', 'Femenino', 24, 'karen.tejada@itca.edu.sv', 'k_tejada'),
('Leonel', 'Prado', 'Masculino', 21, 'leonel.prado@itca.edu.sv', 'l_prado'),
('Celia', 'Cisneros', 'Femenino', 19, 'celia.cisneros@itca.edu.sv', 'itca_cc'),
('Rolando', 'Valladares', 'Masculino', 25, 'rolando.valladares@itca.edu.sv', 'r_valla'),
('Blanca', 'Arevalo', 'Femenino', 20, 'blanca.arevalo@itca.edu.sv', 'b_arevalo'),
('Arturo', 'Castaneda', 'Masculino', 22, 'arturo.castaneda@itca.edu.sv', 'itca_ac'),
('Sonia', 'Galdamez', 'Femenino', 19, 'sonia.galdamez@itca.edu.sv', 's_galdamez'),
('Rogelio', 'Pineda', 'Masculino', 23, 'rogelio.pineda@itca.edu.sv', 'r_pineda'),
('Diana', 'Beltran', 'Femenino', 20, 'diana.beltran@itca.edu.sv', 'itca_db'),
('Elias', 'Hurtado', 'Masculino', 24, 'elias.hurtado@itca.edu.sv', 'e_hurtado'),
('Nora', 'Menjivar', 'Femenino', 21, 'nora.menjivar@itca.edu.sv', 'n_menjivar'),
('Cristobal', 'Lara', 'Masculino', 19, 'cristobal.lara@itca.edu.sv', 'c_lara'),
('Julia', 'Gallegos', 'Femenino', 22, 'julia.gallegos@itca.edu.sv', 'itca_jg'),
('Esteban', 'Paz', 'Masculino', 20, 'esteban.paz@itca.edu.sv', 'e_paz'),
('Enna', 'Deras', 'Femenino', 24, 'enna.deras@itca.edu.sv', 'e_deras'),
('Gilberto', 'Pocasangre', 'Masculino', 21, 'gilberto.pocasangre@itca.edu.sv', 'itca_gp'),
('Lorena', 'Lozano', 'Femenino', 19, 'lorena.lozano@itca.edu.sv', 'l_lozano');
go

-- Confirmación de datos
select * from Estudiante;

-- Insertando 100 libros 
insert into Libro (Codigo, Titulo, Autor, Editorial, GeneroLibro, Stock, Disponibilidad) values
('LIT-001', 'Cuentos de Barro', 'Salarrué', 'DPI El Salvador', 'Literatura', 5, 1),
('LIT-002', 'Jícaras Tristes', 'Alfredo Espino', 'DPI El Salvador', 'Poesía', 8, 1),
('LIT-003', 'Un día en la vida', 'Manlio Argueta', 'UCA Editores', 'Novela', 4, 1),
('LIT-004', 'El Asco', 'Horacio Castellanos Moya', 'Casiopea', 'Ficción', 3, 1),
('LIT-005', 'Tierra de Infancia', 'Claudia Lars', 'Editorial Delgado', 'Poesía', 6, 1),
('LIT-006', 'Roque Dalton: Poesía Escogida', 'Roque Dalton', 'UCA Editores', 'Poesía', 5, 1),
('LIT-007', 'Leyendas de Guatemala', 'Miguel Ángel Asturias', 'Fondo de Cultura', 'Literatura', 4, 1),
('SOFT-001', 'Java a Fondo', 'Pablo Sznajdleder', 'Alfaomega', 'Programación', 10, 1),
('SOFT-002', 'Patrones de Diseño en Java', 'Erich Gamma', 'Addison-Wesley', 'Software', 5, 1),
('SOFT-003', 'Inteligencia Artificial: Un Enfoque Moderno', 'Stuart Russell', 'Pearson', 'IA', 4, 1),
('SOFT-004', 'Clean Code', 'Robert C. Martin', 'Prentice Hall', 'Software', 7, 1),
('SOFT-005', 'Estructuras de Datos con C++', 'Luis Joyanes', 'McGrawHill', 'Programación', 8, 1),
('SOFT-006', 'SQL Avanzado para Bases de Datos', 'Ricardo Castro', 'Técnica SV', 'Bases de Datos', 12, 1),
('RED-001', 'CCNA 200-301 Guía de Estudio', 'Wendell Odom', 'Cisco Press', 'Redes', 10, 1),
('RED-002', 'Redes de Computadoras', 'Andrew Tanenbaum', 'Pearson', 'Infraestructura', 6, 1),
('HARD-001', 'Arquitectura de Computadores', 'M. Morris Mano', 'Pearson', 'Hardware', 5, 1),
('HARD-002', 'Mantenimiento Preventivo de PC', 'Jean Andrews', 'Cengage', 'Hardware', 10, 1),
('MTR-001', 'Introducción a la Mecatrónica', 'David Alciatore', 'McGrawHill', 'Mecatrónica', 5, 1),
('MTR-002', 'Sistemas de Control Automático', 'Benjamin Kuo', 'Prentice Hall', 'Ingeniería', 4, 1),
('ELE-001', 'Dispositivos Electrónicos', 'Thomas Floyd', 'Pearson', 'Electrónica', 9, 1),
('ELE-002', 'Sistemas Digitales', 'Ronald Tocci', 'Pearson', 'Electrónica', 7, 1),
('AUTO-001', 'Sistemas de Vehículos Eléctricos', 'James Larminie', 'Wiley', 'Electromovilidad', 4, 1),
('AUTO-002', 'Mecánica Automotriz Moderna', 'James Duffy', 'Goodheart-Willcox', 'Automotriz', 6, 1),
('CIV-001', 'Análisis Estructural', 'Russell Hibbeler', 'Pearson', 'Civil', 5, 1),
('CIV-002', 'Mecánica de Suelos', 'Karl Terzaghi', 'Limusa', 'Civil', 4, 1),
('ARQ-001', 'Neufert: El Arte de Proyectar en Arquitectura', 'Ernst Neufert', 'Gustavo Gili', 'Arquitectura', 3, 1),
('ARQ-002', 'Historia de la Arquitectura en El Salvador', 'Gustavo Milán', 'DPI', 'Arquitectura', 2, 1),
('GAS-001', 'Técnicas Culinarias de Vanguardia', 'Le Cordon Bleu', 'H. Fullmann', 'Gastronomía', 5, 1),
('GAS-002', 'La Cocina Salvadoreña', 'Vilma G. de Escobar', 'Editorial Ricaldone', 'Gastronomía', 10, 1),
('GAS-003', 'Administración de Alimentos y Bebidas', 'Bernard Davis', 'Routledge', 'Gestión', 5, 1),
('QUI-001', 'Química General', 'Raymond Chang', 'McGrawHill', 'Química', 12, 1),
('QUI-002', 'Análisis Químico Cuantitativo', 'Daniel Harris', 'Reverté', 'Laboratorio', 6, 1),
('QUI-003', 'Operaciones Unitarias en Ingeniería Química', 'Warren McCabe', 'McGrawHill', 'Industrial', 5, 1),
('MEC-001', 'Tecnología de las Máquinas Herramienta', 'Steve Krar', 'McGrawHill', 'Mecánica', 6, 1),
('MEC-002', 'Programación de CNC', 'Francisco Cruz', 'Alfaomega', 'CNC', 8, 1),
('MEC-003', 'Mantenimiento Industrial Preventivo', 'Enrique Dounce', 'Patria', 'Mantenimiento', 7, 1),
('MAN-001', 'Industria 4.0 y Manufactura Inteligente', 'Diego Galar', 'CRC Press', 'Manufactura', 4, 1),
('ENR-001', 'Energía Solar Fotovoltaica', 'Miguel Pareja', 'Marcombo', 'Energía', 6, 1),
('ENR-002', 'Sistemas de Energía Eólica', 'Vaughn Nelson', 'CRC Press', 'Energía', 3, 1),
('ELC-001', 'Circuitos Eléctricos', 'James Nilsson', 'Pearson', 'Eléctrica', 10, 1);

-- Generando el resto (hasta llegar a 100) para completar el catálogo variado
declare @i int = 42;
while @i <= 100
begin
    insert into Libro (Codigo, Titulo, Autor, Editorial, GeneroLibro, Stock, Disponibilidad)
    values (
        'TEC-' + right('000' + cast(@i as varchar), 3),
        'Guía Técnica Especializada Fascículo ' + cast(@i as varchar),
        'Varios Autores ITCA',
        'Editorial ITCA-FEPADE',
        case 
            when @i % 5 = 0 then 'Manuales Técnicos'
            when @i % 5 = 1 then 'Matemática Aplicada'
            when @i % 5 = 2 then 'Física Industrial'
            when @i % 5 = 3 then 'Ética Profesional'
            else 'Inglés Técnico'
        end,
        5 + (@i % 10),
        1
    );
    set @i = @i + 1;
end
go

-- Verificación de carga
select GeneroLibro, count(*) as CantidadLibros 
from Libro 
group by GeneroLibro;

select * from Prestamo



-- EXEC sp_rename 'Prestamo.Estadp', 'Estado', 'COLUMN';



-- Usamos un bucle para asegurar que los IDs existan y las fechas tengan sentido
declare @i int = 1;
declare @randomEstudiante int;
declare @randomLibro int;
declare @fSalida datetime;
declare @fMax datetime;

while @i <= 100
begin
    -- Seleccionamos IDs que ya existen
    set @randomEstudiante = (select top 1 IDEstudiante from Estudiante order by newid());
    set @randomLibro = (select top 1 IDLibro from Libro order by newid());
    
    -- Simulamos que los préstamos ocurrieron en los últimos 60 días
    set @fSalida = dateadd(day, -(@i % 60), getdate());
    set @fMax = dateadd(day, 8, @fSalida); -- Dan 8 días para devolver

    insert into Prestamo (IDEstudiante, IDLibro, FechaSalida, FechaMaxDevolucion, FechaEntrega, Estado)
    values (
        @randomEstudiante,
        @randomLibro,
        @fSalida,
        @fMax,
        -- Lógica para el estado:
        case 
            when @i % 10 = 0 then null -- 10% están en MORA (no entregados y viejos)
            when @i % 3 = 0 then null  -- Algunos siguen ACTIVOS (recientes)
            else dateadd(day, 5, @fSalida) -- El resto se DEVOLVIÓ a los 5 días (a tiempo)
        end,
        case 
            when @i % 10 = 0 then 'Mora'
            when @i % 3 = 0 then 'Activo'
            else 'Devuelto'
        end
    );
    set @i = @i + 1;
end
go

-- Verificación rápida de los estados generados
select Estado, count(*) as Cantidad from Prestamo group by Estado;



-- Poblamos la tabla Transaccion (100 registros)
-- Vamos a vincularlos con los IDPrestamo que ya existen
declare @i int = 1;
declare @idPrestamo int;
declare @montoMora decimal(10,2);
declare @estadoPrestamo varchar(20);

while @i <= 100
begin
    -- Seleccionamos el ID del préstamo de forma secuencial para cubrir los 100
    set @idPrestamo = @i;
    
    -- Obtenemos el estado de ese préstamo para decidir si cobramos mora
    set @estadoPrestamo = (select Estado from Prestamo where IDPrestamo = @idPrestamo);

    if (@estadoPrestamo = 'Mora')
    begin
        -- Si está en mora, asignamos una multa (ejemplo entre $1.50 y $5.00)
        set @montoMora = 1.50 + (rand() * 3.50);
        insert into Transaccion (IDPrestamo, Mora, FechaTransaccion, DetalleTransaccion)
        values (
            @idPrestamo, 
            @montoMora, 
            getdate(), 
            'Cobro de multa por entrega tardía - Usuario ITCA'
        );
    end
    else
    begin
        -- Si no hay mora, el cobro es $0.00 (solo registro de trámite)
        insert into Transaccion (IDPrestamo, Mora, FechaTransaccion, DetalleTransaccion)
        values (
            @idPrestamo, 
            0.00, 
            getdate(), 
            'Emisión de ticket de préstamo - Sin cargos'
        );
    end

    set @i = @i + 1;
end
go

-- Consultas finales para verificar que todo esté en orden:
print '--- RESUMEN DE CARGA FINAL ---';
select 'Estudiantes' as Tabla, count(*) as Total from Estudiante
union all
select 'Libros', count(*) from Libro
union all
select 'Prestamos', count(*) from Prestamo
union all
select 'Transacciones', count(*) from Transaccion;

-- Ver un ejemplo de los datos finales combinados
select top 10 
    E.Nombre + ' ' + E.Apellido as Estudiante,
    L.Titulo as Libro,
    P.Estado,
    T.Mora as MultaPagada,
    T.DetalleTransaccion
from Transaccion T
join Prestamo P on T.IDPrestamo = P.IDPrestamo
join Estudiante E on P.IDEstudiante = E.IDEstudiante
join Libro L on P.IDLibro = L.IDLibro
order by T.Mora desc;