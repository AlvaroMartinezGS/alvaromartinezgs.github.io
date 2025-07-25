// script.js - Control de interacción del CV Web
// ---------------------------------------------------
// Este archivo maneja:
// 1. La apertura y cierre del menú lateral en móviles.
// 2. Animaciones suaves al hacer scroll.

// Selección del botón hamburguesa y la barra lateral
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

// Evento: abrir/cerrar menú en móviles
if (menuToggle && sidebar) {
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
}

// Cerrar el menú cuando se hace clic fuera de él (en móviles)
document.addEventListener('click', (event) => {
  if (
    sidebar.classList.contains('open') &&
    !sidebar.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    sidebar.classList.remove('open');
  }
});

// (Opcional) Animaciones adicionales al hacer scroll
// Las clases .fade-in están en el CSS y se activan automáticamente con la animación definida.
// Si se desea algo más dinámico (aparición al entrar en el viewport),
// podría implementarse con IntersectionObserver aquí.
