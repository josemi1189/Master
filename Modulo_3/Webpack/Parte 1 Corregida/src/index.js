import styles from "./assets/css/style.module.scss";
import imgSrc from "./assets/images/logo-lemoncode.svg";

const container = document.createElement("div");
container.className = styles.container;

const title = document.createElement("h1");
title.innerText = "¡Hola mundo!";

const image = document.createElement("img");
image.src = imgSrc;
image.classList = styles.logo;

container.appendChild(title);
container.appendChild(image);
document.body.appendChild(container);
