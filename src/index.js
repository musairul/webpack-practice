import { greeting } from "./greeting.js";
import "./styles.css";
import chickenImg from "./chicken.jpg";

console.log(greeting);

const image = document.createElement("img");
image.src = chickenImg;
document.body.appendChild(image);
