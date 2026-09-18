import { buildMailto } from '../utils/contact';
export function initContact() {
  const form = document.querySelector<HTMLFormElement>('#contact-form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const recipient = form.dataset.recipient;
    if (!recipient) return;
    const href = buildMailto(recipient, {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      topic: String(data.get('topic') ?? ''),
      message: String(data.get('message') ?? ''),
    });
    const feedback = document.querySelector('#form-feedback');
    if (feedback)
      feedback.textContent =
        'Correo preparado. Revisa y envía el mensaje en tu aplicación de correo. Si no se abre, puedes escribir directamente a la dirección indicada.';
    window.location.href = href;
  });
  document
    .querySelector<HTMLButtonElement>('[data-copy-email]')
    ?.addEventListener('click', async (event) => {
      const button = event.currentTarget as HTMLButtonElement;
      const email = button.dataset.copyEmail;
      const status = document.querySelector('#copy-feedback');
      if (!email || !status) return;
      try {
        await navigator.clipboard.writeText(email);
        status.textContent = 'Correo copiado al portapapeles.';
      } catch {
        status.textContent = `No se pudo copiar. Selecciona la dirección ${email} para copiarla manualmente.`;
      }
    });
}
