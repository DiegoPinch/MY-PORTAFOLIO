export function initNavigation() {
  const toggle = document.querySelector<HTMLButtonElement>('#menu-toggle');
  const menu = document.querySelector<HTMLElement>('#mobile-navigation');
  if (!toggle || !menu) return;
  const close = () => {
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
  };
  menu.querySelector<HTMLButtonElement>('[data-menu-close]')?.addEventListener('click', () => { close(); toggle.focus(); });
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    menu.hidden = expanded;
    toggle.setAttribute('aria-expanded', String(!expanded));
    toggle.setAttribute('aria-label', expanded ? 'Abrir menú' : 'Cerrar menú');
  });
  menu.querySelectorAll('[data-mobile-close]').forEach((link) => link.addEventListener('click', close));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !menu.hidden) {
      close();
      toggle.focus();
    }
  });
  matchMedia('(min-width: 1280px)').addEventListener('change', (event) => {
    if (event.matches) close();
  });
  const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')];
  const sections = [...document.querySelectorAll<HTMLElement>('main > section[id]')];
  let pending = false;
  const updateActive = () => {
    const current = sections.filter((section) => section.getBoundingClientRect().top <= 160).at(-1);
    links.forEach((link) => {
      if (link.hash === `#${current?.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    pending = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!pending) {
        pending = true;
        requestAnimationFrame(updateActive);
      }
    },
    { passive: true },
  );
  updateActive();
}
