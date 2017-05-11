/* global document, window */
function framer(target, container) {
  const frame = target;
  const height = frame.offsetHeight;
  const width = frame.offsetWidth;
  const frameStyle = frame.style;
  if (typeof container !== 'undefined') {
    const parent = document.querySelector(container);
    const maxwidth = window.getComputedStyle(parent, null).getPropertyValue('max-width');
    frameStyle.width = '100%';
    frameStyle.maxHeight = `calc(${maxwidth} * ${height}/${width})`;
  } else {
    const maxwidth = `${width}px`;
    frameStyle.display = 'block';
    frameStyle.marginLeft = 'auto';
    frameStyle.marginRight = 'auto';
    let fullwidth = `${maxwidth}px`;
    if (width > frame.parentElement.offsetWidth) {
      fullwidth = frame.parentElement.offsetWidth;
      frameStyle.maxHeight = `calc(${fullwidth}px * ${height}/${width})`;
    } else {
      frameStyle.maxHeight = `calc(${maxwidth} * ${height}/${width})`;
    }
    frameStyle.width = `${fullwidth}px`;
  }
  frameStyle.height = `calc(100vw * ${height}/${width})`;
  frameStyle.maxWidth = '100vw';
}

export default function noframe(target, container) {
  let frames = typeof target === 'string' ? document.querySelectorAll(target) : target;
  if (!('length' in frames)) frames = [frames];
  for (let i = 0; i < frames.length; i + 1) {
    const frame = frames[i];
    framer(frame, container);
  }
}
