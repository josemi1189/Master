import styles from "./assets/style.module.scss";

const container = document.createElement("div");
container.className = styles.container;

const title = document.createElement("h1");
title.innerText = "¡Hola mundo!";

const image = document.createElement("img");
image.src = "/logo-lemoncode.svg";

container.appendChild(title);
container.appendChild(image);
document.body.appendChild(container);