const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menú');
}));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    toggle.focus();
  }
});


const themeSelect = document.getElementById('themeSelect');
const colorPreference = window.matchMedia('(prefers-color-scheme: dark)');
let themePreference = 'system';

try {
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') themePreference = savedTheme;
} catch {
  // Si el navegador bloquea el almacenamiento, el selector sigue funcionando en esta visita.
}

function applyTheme(preference) {
  themePreference = preference;
  const resolvedTheme = preference === 'system'
    ? (colorPreference.matches ? 'dark' : 'light')
    : preference;

  document.documentElement.dataset.theme = resolvedTheme;
  document.documentElement.style.colorScheme = resolvedTheme;
  themeSelect.value = preference;
}

applyTheme(themePreference);

themeSelect.addEventListener('change', () => {
  const preference = themeSelect.value;
  try {
    if (preference === 'system') localStorage.removeItem('portfolio-theme');
    else localStorage.setItem('portfolio-theme', preference);
  } catch {
    // La preferencia se aplica igualmente aunque no pueda guardarse.
  }
  applyTheme(preference);
  if (window.matchMedia('(max-width: 600px)').matches) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
  }
});

colorPreference.addEventListener('change', () => {
  if (themePreference === 'system') applyTheme('system');
});
