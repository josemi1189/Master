import styles from "./index.module.css";

const name: string = "Jhon";
console.log(`Hola ${name}`);

console.log("import.meta.env.MODE: ", import.meta.env.MODE);

// https://vite.dev/guide/env-and-mode.html
console.log("Variable entorno VITE_API_URL", import.meta.env.VITE_API_URL);

// Crea un elemento <h1> con texto, utilizando la API del DOM, y dale estilos con CSSModules.
const div = document.createElement("div");
const h1 = document.createElement("h1");

div.className = styles.content;
h1.className = styles.title;
h1.innerHTML = "Creando nuevo proyecto con Vite";
div.appendChild(h1);
const app = document.getElementById("app");
if (app) app.appendChild(div);
