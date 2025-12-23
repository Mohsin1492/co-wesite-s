// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

const toggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");

  toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });