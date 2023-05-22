import React from "react";
import { createRoot } from "react-dom/client";
import "./mystyles.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>¡Hola Mundo! ¿Qué tal? Este fragmento de código ha sido creado con React</h1>
  </div>
);

console.log(`Api base: ${process.env.API_BASE}`);
