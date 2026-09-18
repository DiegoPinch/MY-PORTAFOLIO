export function initTheme() {
  const root = document.documentElement;
  const button = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
  const system = matchMedia('(prefers-color-scheme: light)');
  const update = (theme: string) => {
    root.dataset.theme = theme;
    button?.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro',
    );
    document.querySelectorAll<HTMLElement>('[data-theme-icon]').forEach((icon) => {
      icon.hidden = icon.dataset.themeIcon !== (theme === 'dark' ? 'sun' : 'moon');
    });
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0a0b10' : '#f6f8fc');
  };
  update(root.dataset.theme ?? 'dark');
  button?.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    update(theme);
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      /* El cambio funciona durante la sesión. */
    }
  });
  system.addEventListener('change', (event) => {
    try {
      if (localStorage.getItem('portfolio-theme')) return;
    } catch {
      /* Usar preferencia del sistema. */
    }
    update(event.matches ? 'light' : 'dark');
  });
}
