// Dark/Light Mode Toggle
const themeToggle = document.createElement('div');
themeToggle.innerHTML = '🌓';
themeToggle.style.position = 'fixed';
themeToggle.style.top = '20px';
theme.style.right = '20px';
themeToggle.style.cursor = 'pointer';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
}

// GSAP Animations (for homepage)
gsap.from('h1', { opacity: 0, y: -50, duration: 1 });
gsap.from('nav a', { opacity: 0, y: 50, stagger: 0.2, duration: 1 });

function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
}
