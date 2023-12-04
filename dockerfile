# Crear imagen a partir de Node.js
# Versión Soporte a Largo Plazo - Ligera
FROM node:lts-slim

# Crea y cambiamos al directorio /app
WORKDIR /app

# Copia el contenido del proyecto a /app
COPY . /app/

# Exponer el puerto 80
EXPOSE 80

# Iniciar el servidor de node
CMD ["node", "app.js"]