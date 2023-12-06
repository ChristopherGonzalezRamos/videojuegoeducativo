CREATE DATABASE IF NOT EXISTS videojuego;

USE videojuego;

CREATE TABLE progreso(
    id_progreso         INTEGER         NOT NULL        AUTO_INCREMENT,
    tipo_progreso       VARCHAR(255)    NOT NULL,
    descripcion         VARCHAR(255)    NOT NULL,
    PRIMARY KEY     (id_progreso)
);

CREATE TABLE usuarios(
    id_usuario      INTEGER         NOT NULL        AUTO_INCREMENT,
    nombre          VARCHAR(255)    NOT NULL,
    fk_id_progreso  INTEGER         NOT NULL,
    PRIMARY KEY     (id_usuario),
    FOREIGN KEY     (fk_id_progreso)       REFERENCES progreso(id_progreso)
);
