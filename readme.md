# M4 — Evaluación Final

## Descripción
- User Manager es una pequeña aplicación web en JavaScript que consume datos de la API JSONPlaceholder para mostrar información de usuarios de forma interactiva. Permite listar usuarios, ver información básica y avanzada, direcciones y compañías, todo dinámicamente desde el navegador.

## Tecnologías utilizadas
- HTML5. 
- CSS3 (Flexbox, Gradientes). 
- JavaScript ES6+.
- API: JSONPlaceholder ![](https://jsonplaceholder.typicode.com/users)

## Estructura del Proyecto
![estructura](https://github.com/AlvarezF7/M4-evaluacion-final/blob/main/assets/img/estructura-proyecto.png)


## Funcionalidades

- Listar los nombres de todos los usuarios.
- Mostrar información básica (username y correo) de un usuario ingresando su nombre.
- Mostrar dirección completa de un usuario.
- Mostrar información avanzada (teléfono, sitio web, compañía y frase de la compañía).
- Listar todas las compañías junto con su “catchphrase”.
- Listar los nombres de todos los usuarios ordenados alfabéticamente.
- Mostrar la información en un div dinámico con opción de cerrar el contenido.
- Botones creados dinámicamente desde JavaScript.

# Manejo de errores
 El proyecto implementa manejo de errores básico enfocado en la experiencia del usuario:

- Si la API no responde o hay un error de red, se muestra un mensaje en la consola.
- Si un usuario no existe, se muestra un alert y un mensaje en el div #result.
- Antes de mostrar datos en el div, se valida que la información ya esté cargada para evitar errores.
- Botón “Cerrar” disponible para limpiar el contenido del div sin recargar la página.

## Capturas
- Vista de los Botones.
- ![captura1](https://github.com/AlvarezF7/M4-evaluacion-final/blob/main/assets/img/captura1.png)

- Vista solicita nombre usuario atravez de prompt.
- ![captura2](https://github.com/AlvarezF7/M4-evaluacion-final/blob/main/assets/img/captura2.png ).

 

# Ver Proyecto
[Link al Proyecto](https://alvarezf7.github.io/M4-evaluacion-final/).

## Autor
Fernanda Álvarez para curso Fullstack Javascript Sence.
 

