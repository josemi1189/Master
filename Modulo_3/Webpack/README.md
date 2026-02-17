# WEBPACK

**Implementar una aplicación simple que:**

## Parte 1

**- Tenga el bundling montado con webpack.**

**- Muestre un logo, por ejemplo el de lemoncode, u otro que queráis.**

Se incluye regla de configuración en webpack.config.js para que procese las imágenes al hacer build. Se modifica estructura de archivos y se incluye imagen en /src/assets/images.

```js
{
  test: /\.(png|svg|jpg|jpeg|gif|ico|webp)$/i,
  type: "asset/resource",
},
```

**- Muestre el texto hola mundo estilado con SASS.**

Se incluye nueva clase **_.logo_** en style.module.scss para dar estilo a la imagen y se centran elementos en **_.container_**

```css
.logo {
  padding: 2em;
  box-shadow: 0 0 3px 0 #b6b6b6;
  max-width: 600px;
}
```

Se incluye nuevo parámetro **_favicon_** sobre el plugin **HtmlWebpackPlugin** para que Webpack cargue y procese el favicon correctamente.

```js
plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      scriptLoading: "blocking",
      favicon: "./src/assets/images/favicon.ico",
    }),
  ],
```

## Parte 2

**- Ahora, mostrad el hola mundo mediante un componente desarrollado con React.**

**- Añadir soporte a Typescript y migrad la semilla si es necesario.**

**- Construid un build de producción y probadlo.**

```js
-> webpack.config.js

output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
```

![/Dist](./Parte%202/public/dist.jpg)

<br />

---

**- Incorporad variables de entorno con diferentes valores según desarrollo y producción.**

- [Plugin dotenv-webpack](npmjs.com/package/dotenv-webpack)
- [Configuration-types](webpack.js.org/configuration/configuration-types/)
- [Enviroment-variables](webpack.js.org/guides/environment-variables/)

```js
-> webpack.config.js

// Obtiene modo de ejecución y utiliza .env que corresponda (.env.development | .env.production) según path generado
export default (argv) => {
  const mode = argv.mode || "development";
  return {
  [...]
  new DotenvWebpack({
    path: `./.env.${mode}`,
          systemvars: true,
          silent: false,
          safe: false,
        }),
    [...]
  }
}
```

Archivo .env.development

```js
WEBPACK_API_BASE=http://localhost:8080
```

Archivo .env.production

```js
WEBPACK_API_BASE=https://api.example.com
```

<br />

---

**- Añadir una forma de medir cuanto ocupa cada librería y nuestro código en el bundle.**

Plugin: [rollup-plugin-bundle-stats](npmjs.com/package/rollup-plugin-bundle-stats)

```js
new BundleStatsWebpackPlugin({
        outDir: ".", // Directorio donde se generará el archivo de salida (bundle-stats.html/.json)
        json: false, // Default: false. True genera archivo de salida .json
      }),
```
