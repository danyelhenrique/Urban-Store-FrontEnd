export function hidden(active) {
  const checkToHidden = active ? 'hidden' : '';
  document.body.style.overflow = checkToHidden;
}
