# Laboratorio REST API

## Introducción

Vamos a consumir una API pública para mostrar datos de la serie Rick & Morty

[https://rickandmortyapi.com/](https://rickandmortyapi.com/)

Como punto de entrada vamos a partir del Boilerplate:

[laboratory](https://github.com/Lemoncode/master-frontend-lemoncode/tree/master/06-rest-api/laboratory)

Tendrás que:

- Cambiar las escenas, rutas y pods a `character-collection` y `character`

### Ejercicio 1

- Crear un proyecto en el que vamos a obtener una lista de actores de la API Rest de Rick & Morty, utilizando Axios o Fetch)

[REST docs](https://rickandmortyapi.com/documentation/#rest)

- Navegando a la página de un `character` vamos a mostrar el detalle del mismo (segunda llamada a la API Rest).

### Ejercicio 2

Para simular escrituras vamos a utilizar un servidor local (carpeta `server` del proyecto). Este servidor mock tiene como datos los 5 primeros personajes e implementa los métodos:

- GET list
- GET character
- PUT

Además de los campos que nos da la API real, hemos añadimos uno nuevo donde guardar la mejor frase de cada personaje

- El campo se llama `bestSentence`.
  Objetivo:

Reemplazar los endpoints para que apunten al servidor local

El usuario puede editar y guardar el campo `bestSentence`.

### Opcional

- Implementar paginación.
- Implementar busqueda de characters.
- Implementar componente para recuperar:
  - Lugares.
  - Episodios.
