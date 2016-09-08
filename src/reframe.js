// Reframe.js
// - runs for 1 child element (does not assume multiple elements)
// - does not deal with src, so it will repaint
// - it JUST creates a fluid wrapper
function Reframe(el) {
  const frames = document.querySelectorAll(el);
  if (frames.length <= 0) return false;
  for (const frame of frames) {
    const frameHeight = frame.offsetHeight;
    const frameWidth = frame.offsetWidth;
    const wrapper = document.createElement('div');
    let divAdded = false;
    let padding = 100;
    if (frameHeight > frameWidth) {
      padding = frameWidth / frameHeight * 100;
    } else if (frameHeight < frameWidth) {
      padding = frameHeight / frameWidth * 100;
    }
    wrapper.style.paddingTop = `${padding}` + '%';
    wrapper.className += 'js-reframe';
    frame.removeAttribute('height');
    frame.removeAttribute('width');
    frame.removeAttribute('style');
    if (! divAdded) {
      frame.parentNode.insertBefore(wrapper, frame);
      divAdded = true;
    }
    frame.parentNode.removeChild(frame);
    wrapper.appendChild(frame);
  }
  return this;
}

export default function (el) {
  return new Reframe(el);
}
