# API REST (Nestjs, MongoDB)
## Descripción
API REST desarrollada con Nestjs y MongoDB, la cual permite realizar operaciones CRUD sobre una colección de Autores y Libros.

## Despliegue
- Clonar el repositorio
- Instalar Docker y Docker Compose
- Ejecutar el comando `docker compose -f docker-compose.dev.yml build` en la raíz del proyecto para construir las imágenes de los contenedores.
- Ejecutar el comando `docker compose -f docker-compose.dev.yml up` en la raíz del proyecto para levantar los contenedores.
- La API estará disponible en `http://localhost:3000`
- La documentación de la API estará disponible en `http://localhost:3000/docs`