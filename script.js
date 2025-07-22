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
