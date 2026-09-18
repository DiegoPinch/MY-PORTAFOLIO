export function initDialogs() {
  document.querySelectorAll<HTMLButtonElement>('[data-open-dialog]').forEach((trigger) => {
    const dialog = document.getElementById(trigger.dataset.openDialog ?? '');
    if (!(dialog instanceof HTMLDialogElement)) return;
    trigger.addEventListener('click', () => {
      if (!dialog.open) dialog.showModal();
    });
    dialog.addEventListener('close', () => trigger.focus({ preventScroll: true }));
  });
  document.querySelectorAll<HTMLDialogElement>('dialog').forEach((dialog) => {
    dialog
      .querySelector<HTMLButtonElement>('[data-close-dialog]')
      ?.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      )
        dialog.close();
    });
  });
}
