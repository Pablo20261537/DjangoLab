import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import "./index.css";
import axios from "axios";

// Esto le dice a Axios que busque la cookie llamada 'csrftoken' de Django
// y la mande automáticamente en la cabecera 'X-CSRFToken' en cada POST/PUT/DELETE
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

createInertiaApp({
  resolve: (name) => {
    // El doble asterisco antes de la extensión (./Pages/**/*.jsx) busca en todas las subcarpetas
    const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });

    // Buscamos dinámicamente el archivo sin importar en qué subcarpeta esté
    let page = pages[`./Pages/${name}.jsx`];

    if (!page) {
      throw new Error(
        `Página no encontrada para: "${name}". Asegúrate de que exista ./Pages/${name}.jsx`,
      );
    }

    return page.default;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
