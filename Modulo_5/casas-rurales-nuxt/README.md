# Casas rurales - Nuxt

## Descripción del proyecto

Aplicación desarrollada como parte del Máster Front End XIX - Módulo 5 - MetaFrameworks de LemonCode.

Uso de metaframeworks modernos y aplicar buenas prácticas de rendering, navegación, búsqueda y optimización de rendimiento en una web de casas rurales.

La propuesta está enfocada en ofrecer una experiencia de usuario fluida, con dos pantallas principales: un listado de casas rurales y una vista de detalle para cada alojamiento.

## Instalación y ejecución

Variables de entorno necesarias:

```js
BASE_API_URL=http://localhost:3001/api
BASE_PICTURES_URL=http://localhost:3001
IMAGES_DOMAIN=localhost
```

1. Instalación de dependencias:

   ```bash
   # Instalar dependencias del FrontEnd (raíz)
   npm install
   ```

   ```bash
   # Instalar dependencias de la API local
   cd api-server
   npm install
   ```

2. Iniciar api server

   ```bash
   cd /api-server
   npm start
   ```

3. Iniciar la aplicación en modo desarrollo:

   ```bash
   # confirmar que se encuentre en la raíz del proyecto
   npm run dev
   ```

4. Acceder a la aplicación en el navegador:
   ```bash
   http://localhost:3000
   ```

## Desafíos implementados

### 1. Implementación con un metaframework: Nuxt

Desarrollado con Nuxt, framework de Vue que permite trabajar con renderizado del lado del servidor y optimización automática de la aplicación.

### 2. Pantalla de listado de casas rurales

Implementada una pantalla inicial en la que se muestra un listado de las casas rurales disponibles. Cada tarjeta incluye información básica como nombre, ubicación, precio, una imagen destacada y una insignia si esa casa estuviera ya reservada.

### 3. Pantalla de detalle de una casa rural

Cada casa del listado puede navegarse a una vista de detalle, donde se muestra información más completa del alojamiento, como descripción, comodidades, reseñas y precio por noche.

### 4. Rendering

`nuxt.config.ts`

```ts
routeRules: {
  "/": { isr: 120 },
  "/detalle/**": { isr: 180 },
},
```

- Página de listado de casas configurado con ISR (Incremental Static Regeneration) y revalidación establecida en 2 minutos.

- Página de detalle configurada con ISR (Incremental Static Regeneration) y revalidación establecida en 3 minutos.
  Configurada caché para limitar el número de consultas a la API.

  `/server/api/houseDetail/[id].get.ts`

  ```ts
  export default cachedEventHandler(
    async (event) => {
      const config = useRuntimeConfig(event);
      const rawId = getRouterParam(event, "id");
      const id = Number(rawId);

      if (!rawId || isNaN(id) || !Number.isInteger(id) || id <= 0) {
        throw createError({
          statusCode: 400,
          statusMessage: "Invalid house id",
        });
      }

      const houses = await $fetch<API.House>(
        `${config.baseApiUrl}/houses/${id}`,
      );
      if (!houses) {
        throw createError({
          statusCode: 404,
          statusMessage: "House not found",
        });
      }
      return mapHouseListToVM(houses, config.basePicturesUrl);
    },
    {
      maxAge: 60,
      name: "detalle-casa",
      getKey: (event) => getRouterParam(event, "id") ?? "default",
    },
  );
  ```

  ISR pre-renderiza las páginas en tiempo de build para que carguen instantáneamente y actualiza su contenido en segundo plano en servidor si este cambia.

### 5. Búsqueda en el listado

Búsqueda que permite filtrar casas por nombre o ubicación.

`/app/pods/HouseListPod/HouseListPod.vue`

```ts
const listFiltered = computed(() =>
  props.houses.filter(
    (house) =>
      house.name.toLowerCase().includes(String(textSearch.value)) ||
      house.city.toLowerCase().includes(String(textSearch.value)),
  ),
);
```

### 6. Botón para reservar una casa rural

En la vista de detalle se incluye un botón para reservar una casa rural. La interacción está gestionada de forma sencilla mediante contexto y permite marcar visualmente si una propiedad ya ha sido reservada.

![Check casa reservada](./docs/reserved-check.jpg)
![Casa reservada](./docs/reserved-card.jpg)

### 7. Optimización de imágenes

Las imágenes del proyecto se gestionan utilizando NuxtImg, que optimiza el rendimiento de la aplicación y la experiencia en dispositivos móviles.

## Tecnologías utilizadas

- Nuxt
- React
- TypeScript
- Sass
- Nuxt Image

## Funcionalidades principales

- Página principal para la visualización del listado de casas rurales
- Navegación entre listado y detalle
- Búsqueda por nombre o ubicación (ciudad)
- Reserva de una casa rural
- Optimización de imágenes con Nuxt Image
- Renderizado para mejorar el rendimiento y la experiencia del usuario (ISR)
