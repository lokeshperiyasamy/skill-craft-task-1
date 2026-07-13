const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const links = document.querySelectorAll('.nav-links a');

links.forEach((link) => {
  const linkPath = link.getAttribute('href');
  if (linkPath === currentPage) {
    link.classList.add('active');
  }
});
