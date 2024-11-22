# API REST (Nestjs, MongoDB)
## Descripción
API REST desarrollada con Nestjs y MongoDB, la cual permite realizar operaciones CRUD sobre una colección de Autores y Libros.

Se ha ocupado la arquitectura que maneja por defecto el framework Nestjs. En base a los requerimientos se ha manejado un id único de tipo numérico autoincremental, sin embargo internamente se sigue generando el _id generado por defecto por MongoDB, para que en un futuro se puedan realizar optimizaciónes en base a este campo.

Asi mismo se ha almacenado los documentos ya listos para servirse cuando se consulten endpoints como el libros, para que no se tenga que hacer un join entre las colecciones de autores y libros.

## Despliegue
- Clonar el repositorio
- Instalar Docker y Docker Compose
- Ejecutar el comando `docker compose -f docker-compose.dev.yml build` en la raíz del proyecto para construir las imágenes de los contenedores.
- Ejecutar el comando `docker compose -f docker-compose.dev.yml up` en la raíz del proyecto para levantar los contenedores.
- La API estará disponible en `http://localhost:3000`
- La documentación de la API estará disponible en `http://localhost:3000/docs`

## Puntos de Mejora
- Implementar pruebas unitarias y de integración.
- Implementar un sistema de pre-commit hooks para ejecutar pruebas y linter antes de hacer un commit.
- Implementar un entorno productivo con Docker y Docker Compose.
