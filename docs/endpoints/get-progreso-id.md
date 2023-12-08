# Endpoint: `GET /progreso/{id}`

Permite obtener información un progreso mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del progreso que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /progreso/1
```

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "id_progreso": 1,
    "tipo_progreso": "Excelente",
    "descripciones": "El usuario tiene un desempeño excelente en los niveles"
  },
  {
    "id_progreso": 2,
    "tipo_progreso": "Bueno",
    "descripciones": "El usuario tiene un buen desempeño en los niveles"
  },
  {
    "id_progreso": 3,
    "tipo_progreso": "Regular",
    "descripciones": "El usuario tiene un desempeño regular en los niveles"
  },
  {
    "id_progreso": 4,
    "tipo_progreso": "Malo",
    "descripciones": "El usuario tiene un mal desempeño en los niveles"
  }
]
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontro el progreso."
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
