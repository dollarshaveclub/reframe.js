/* global document, window */
function framer(target, cName) {
  const frame = target;
  const classname = cName || 'js-reframe';
  const hasClass = frame.className.split(' ').indexOf(classname) !== -1;
  if (hasClass) return;

  const height = frame.offsetHeight;
  const width = frame.offsetWidth;
  const padding = (height / width) * 100;

  const div = document.createElement('div');
  div.className = classname;
  const divStyle = div.style;
  divStyle.position = 'relative';
  divStyle.width = '100%';
  divStyle.paddingTop = `${padding}%`;

  const frameStyle = frame.style;
  frameStyle.position = 'absolute';
  frameStyle.width = '100%';
  frameStyle.height = '100%';
  frameStyle.left = '0';
  frameStyle.top = '0';

  frame.parentNode.insertBefore(div, frame);
  frame.parentNode.removeChild(frame);
  div.appendChild(frame);
}

export default function reframe(target, cName) {
  let frames = (typeof target === 'string') ? document.querySelectorAll(target) : target;
  if (!('length' in frames)) frames = [frames];
  for (let i = 0; i < frames.length; i += 1) {
    const frame = frames[i];
    framer(frame, cName);
  }
}
