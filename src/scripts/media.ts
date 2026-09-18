export function initMedia() {
  document.querySelectorAll<HTMLImageElement>('[data-managed-image]').forEach((image) => {
    const fallback = () => {
      const frame = image.closest<HTMLElement>('.media-frame');
      if (!frame) return;
      frame.dataset.failed = 'true';
      frame.querySelector('[aria-hidden]')?.removeAttribute('aria-hidden');
    };
    image.addEventListener('error', fallback);
    if (image.complete && image.naturalWidth === 0) fallback();
  });
}
