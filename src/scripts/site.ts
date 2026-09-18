import { initTheme } from './theme';
import { initNavigation } from './navigation';
import { initDialogs } from './dialogs';
import { initContact } from './contact';
import { initMedia } from './media';
const reveal = () => {
  const items = [...document.querySelectorAll<HTMLElement>('.reveal')];
  if (!('IntersectionObserver' in window)) { items.forEach(item => item.classList.add('is-visible')); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  items.forEach(item => observer.observe(item));
};
initTheme();
initNavigation();
initDialogs();
initContact();
initMedia();
reveal();
