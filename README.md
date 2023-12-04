# Proyecto (Videojuego Educativo)

Proyecto de un videojuego educativo para enseñar mientras juegan conceptos de cómputo y temas derivados de este.

## Tabla de contenido
- [Proyecto (Videojuego Educativo)](#proyecto-videojuego-educativo)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Requisitos de instalación](#requisitos-de-instalación)
  - [Instrucciones para la instalación](#instrucciones-para-la-instalación)
  - [Documentación detallada](#documentación-detallada)
  - [Enlaces externos](#enlaces-externos)


## Requisitos de instalación

Es importante tener instalado y configurado el Docker antes de empezar

- [Docker](https://www.docker.com)

## Instrucciones para la instalación

1. Clonar el repositorio en la máquina local:
   
   ```sh
   git clone https://github.com/ChristopherGonzalezRamos/videojuego-educativo.git
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd Videojuego educativo
   ```

3. Ejecutar el siguiente comando para iniciar los contenedores:

    ```sh
    docker-compose up -d
    ```

    > **IMPORTANTE**
    >
    > Debe estar iniciado el Docker engine para ejecutar el comando anterior,
    > si no lo está, se devolverá un mensaje de error indicando que no se
    > encontró el docker daemon.

4. La API estará disponible en `http://localhost:3001`.

## Documentación detallada

Para obtener información detallada sobre los endpoints y cómo utilizar la API,
consulta la [documentación detallada](./docs/README.md).

## Enlaces externos

- [Node.js](https://www.nodejs.org)
- [Docker](https://www.docker.com)