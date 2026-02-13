# Laboratorio de bundling

1. Esté configurado con TypeScript y que permita detectar errores de tipos en la terminal si los hubiera.

   ![TypeScript configurado](./public/1.jpg)

2. Se pueda ver el tamaño del bundle.

   ![Tamaño del bundle](./public/2.jpg)

3. Tenga los scripts básicos de desarrollo local:

   ![Scripts básicos](./public/3.jpg)

4. Crea un setup de modo que las variables puedan tener un valor para desarrollo y otro distinto para producción.

   ![Archivos .env](./public/4.1.jpg)

   Se muestran dos navegadores, uno con servidor en desarrollo y otro en producción.

   ![Archivos .env](./public/4.2.jpg)

5. Crea un elemento \<h1> con texto, utilizando la API del DOM, y dale estilos con CSSModules.

   ![Código para crear elemento H1](./public/5.1.jpg)
   ![Vista del elemento H1 creado](./public/5.2.jpg)

## Opcional

Añade la configuración necesaria para que al hacer la build también genere los ficheros de forma comprimida (GZIP y BROTLI), por lo que al hacer la build deberán existir los ficheros dist/index-<hash>.js.gz y un dist/index-<hash>.js.br.

![Opcional](./public/opcional.jpg)

_[Paquete NPM (vite-plugin-compression2)](https://www.npmjs.com/package/vite-plugin-compression2)_
