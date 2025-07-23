console.log('Portfolio v5 cargado');
const toggleBtn = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});
document.querySelectorAll('.sidebar nav a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
});
let touchStartX = 0;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
  const touchEndX = e.changedTouches[0].screenX;
  const sidebar = document.querySelector('.sidebar');

  // Si hay un gesto hacia la izquierda (más de 50px)
  if (sidebar.classList.contains('open') && (touchStartX - touchEndX > 50)) {
    sidebar.classList.remove('open');
  }
});


document.addEventListener('click', (e) => {
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.querySelector('.menu-toggle');
  
  // Si el menú está abierto y el clic es fuera del menú y del botón
  if (sidebar.classList.contains('open') &&
      !sidebar.contains(e.target) &&
      !toggleBtn.contains(e.target)) {
    sidebar.classList.remove('open');
  }
});
