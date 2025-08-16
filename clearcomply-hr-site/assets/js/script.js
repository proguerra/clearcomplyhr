
// Mobile nav toggle & current year
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.mobile-toggle');
  if (toggle) toggle.addEventListener('click', () => nav.classList.toggle('open'));
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
