import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { buildMailto } from '../src/utils/contact';

test('contact mail preserves special characters and line breaks', () => {
  const href = buildMailto('diego@example.com', {
    name: ' Ana Pérez ',
    email: 'ana@example.com',
    topic: 'ERP & APIs',
    message: 'Hola Diego,\nProyecto + integración #1',
  });
  const query = new URL(href).searchParams;
  expect(query.get('subject')).toBe('ERP & APIs — Ana Pérez');
  expect(query.get('body')).toContain('Proyecto + integración #1');
  expect(query.get('body')).toContain('\nAna Pérez\nana@example.com');
});

test('desktop themes, keyboard dialogs and WCAG AA checks', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Diego Fernando Pincha Lema');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.screenshot({ path: 'test-results/desktop-dark.png', fullPage: true });
  const dark = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(dark.violations).toEqual([]);
  const trigger = page.getByRole('button', { name: 'Ver detalles' }).first();
  await trigger.click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole('button', { name: 'Cerrar diálogo' })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await page.getByRole('button', { name: 'Activar modo claro' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.screenshot({ path: 'test-results/desktop-light.png', fullPage: true });
  const light = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  expect(light.violations).toEqual([]);
  expect(errors).toEqual([]);
});

test('mobile menu, valid anchors, responsive widths and form validation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Abrir menú' }).click();
  await expect(page.getByRole('navigation', { name: 'Navegación móvil' })).toBeVisible();
  await page
    .getByRole('navigation', { name: 'Navegación móvil' })
    .getByRole('link', { name: 'Proyectos' })
    .click();
  await expect(page.getByRole('button', { name: 'Abrir menú' })).toHaveAttribute(
    'aria-expanded',
    'false',
  );
  await expect(page).toHaveURL(/#proyectos$/);
  const badAnchors = await page
    .locator('a[href^="#"]')
    .evaluateAll((links) =>
      links
        .map((link) => link.getAttribute('href')!)
        .filter((href) => href.length > 1 && !document.getElementById(href.slice(1))),
    );
  expect(badAnchors).toEqual([]);
  for (const width of [320, 360, 390, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
      `overflow at ${width}px`,
    ).toBe(true);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: 'test-results/mobile-dark.png', fullPage: true });
  await page.getByRole('button', { name: 'Preparar correo para Diego' }).click();
  await expect(page.locator('#contact-name')).toBeFocused();
  await expect(page.locator('#form-feedback')).toBeEmpty();
  const mobile = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  expect(mobile.violations).toEqual([]);
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe(
    'auto',
  );
});
