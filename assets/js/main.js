
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.querySelector('#year');
  if (yearSpan){ yearSpan.textContent = new Date().getFullYear(); }

  // Simple mobile nav toggle
  const toggle = document.querySelector('#nav-toggle');
  const nav = document.querySelector('#nav');
  if (toggle && nav){
    toggle.addEventListener('click', ()=> nav.classList.toggle('open'));
  }
});
