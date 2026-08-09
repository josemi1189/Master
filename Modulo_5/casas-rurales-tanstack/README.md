# Casas rurales - TanStack Start

## Descripción del proyecto

Aplicación desarrollada como parte del Máster Front End XIX - Módulo 5 - MetaFrameworks de LemonCode.

Uso de metaframeworks modernos y aplicar buenas prácticas de rendering, navegación, búsqueda y optimización de rendimiento en una web de casas rurales.

La propuesta está enfocada en ofrecer una experiencia de usuario fluida, con dos pantallas principales: un listado de casas rurales y una vista de detalle para cada alojamiento.

## Instalación y ejecución

Variables de entorno necesarias:

```js
BASE_API_URL=http://localhost:3001/api
VITE_BASE_PICTURES_URL=http://localhost:3001
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
   http://localhost:5173
   ```

## Desafíos implementados

### 1. Implementación con un metaframework: TanStack Start

Desarrollado con TanStack Start, framework full-stack que permite trabajar con renderizado del lado del servidor y optimización automática de la aplicación utilizando librerías con React, Svelte o Vue.

### 2. Pantalla de listado de casas rurales

Implementada una pantalla inicial en la que se muestra un listado de las casas rurales disponibles. Cada tarjeta incluye información básica como nombre, ubicación, precio, una imagen destacada y una insignia si esa casa estuviera ya reservada.

### 3. Pantalla de detalle de una casa rural

Cada casa del listado puede navegarse a una vista de detalle, donde se muestra información más completa del alojamiento, como descripción, comodidades, reseñas y precio por noche.

### 4. Rendering adecuado según la página

#### PÁGINA PRINCIPAL

ISR (Incremental Static Regeneration). Revalidación establecida en 10 minutos.

`/src/pods/house-list/api/house-list.api.ts`

```ts
export const getHouseList = createServerFn().handler(async () => {
  const baseUrl = getPrivateEnv().BASE_API_URL;
  const response = await fetch(`${baseUrl}/houses`, {});

  if (!response.ok) {
    throw new Error(`Error ${response.status} al cargar casas`);
  }

  return response.json();
});
```

`/src/routes/index.tsx`

```ts
export const Route = createFileRoute("/")({
  loader: async () => API.getHouseList(),
  headers: () => ({
    "Cache-Control": "public, max-age=300, stale-while-revalidate=600",
  }),
  staleTime: 60_000, // 1 min
  component: Home,
});
```

**Caché de red a nivel HTTP**

- **max-age:** Tiempo en segundos que considera como actualizados los datos antes de volver a hacer nuevo fetch

- **stale-while-revalidate:** Tiempo en segundos que sigue sirviendo los datos después de superar `max-age` mientras los actualiza de nuevo.

**Caché de aplicación**

- **staleTime:** Tiempo en milisegundos. Caché de aplicación en navegación interna sin recarga de página completa.

Precarga de las imágenes de los tres primeros resultados del listado con prioridad alta para que aparezcan lo antes posible; el resto con prioridad baja no bloquear el renderizado inicial.

`/src/pods/house-list/components/card/card.tsx`

```ts
loading={index < 3 ? "eager" : "lazy"}
```
