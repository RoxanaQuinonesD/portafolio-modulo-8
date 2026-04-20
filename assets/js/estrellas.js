document.addEventListener("DOMContentLoaded", () => {
  const secciones = document.querySelectorAll("section");

  secciones.forEach((seccion) => {
    const estrellas = document.createElement("div");
    estrellas.className = "estrellas-fondo";

    estrellas.innerHTML = `
      <span class="estrella uno"></span>
      <span class="estrella dos"></span>
      <span class="estrella tres"></span>
      <span class="estrella cuatro"></span>
      <span class="estrella cinco"></span>
    `;

    seccion.prepend(estrellas);
  });
});