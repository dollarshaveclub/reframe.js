// Reframe.js
// - runs for all selector unless otherwise specified
// - does not deal with src, so it will repaint
// - it JUST creates a fluid wrapper
function Reframe(selector) {
  const frames = document.querySelectorAll(selector);
  if (frames.length <= 0) return false;
  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];
    const height = frame.offsetHeight;
    const width = frame.offsetWidth;
    const div = document.createElement('div');
    let padding = 100;
    if (height !== width) {
      padding = height / width * 100;
    }
    div.style.paddingTop = `${padding}%`;
    frame.removeAttribute('height');
    frame.removeAttribute('width');
    frame.removeAttribute('style');
    if (!div.classList.contains('js-reframe')) {
      div.className += 'js-reframe';
      frame.parentNode.insertBefore(div, frame);
    }
    frame.parentNode.removeChild(frame);
    div.appendChild(frame);
  }
  return this;
}

export default function (selector) {
  return new Reframe(selector);
}
