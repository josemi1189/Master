# WEBPACK

**Implementar una aplicación simple que:**

## Parte 1

**- Tenga el bundling montado con webpack.**

**- Muestre un logo, por ejemplo el de lemoncode, u otro que queráis.**

**- Muestre el texto hola mundo estilado con SASS.**

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
