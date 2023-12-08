# Endpoint: `GET /usuarios/{id}`

Permite obtener información un usuario mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del usuario que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /usuarios/1
```

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
        "id_usuario": 1,
        "nombre": "Juan Garcia",
        "fk_id_progreso": 4
    },
    {
        "id_usuario": 2,
        "nombre": "Juan Garcia",
        "fk_id_progreso": 1
    },
    {
        "id_usuario": 3,
        "nombre": "Juan Aranda Carranza",
        "fk_id_progreso": 1
    },
    {
        "id_usuario": 4,
        "nombre": "Oscar Lorenzo",
        "fk_id_progreso": 2
    }
]
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontro el usuario."
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 
