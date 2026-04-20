document.addEventListener("DOMContentLoaded", () => {
  const miniaturas = document.querySelectorAll(".miniatura");

  miniaturas.forEach((miniatura) => {
    miniatura.addEventListener("click", () => {
  miniatura.classList.add("visto");
});
    miniatura.innerHTML = `
      <img src="assets/img/mundo.gif" alt="Abrir proyecto en PDF" class="icono-pdf">
    `;
  });
});