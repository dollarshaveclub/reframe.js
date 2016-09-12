function Reframe(selector, cName) {
  const frames = document.querySelectorAll(selector);
  const classname = typeof cName !== 'undefined' ? cName : 'js-reframe';
  if (frames.length <= 0) return false;
  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];
    const hasClass = frame.className.split(' ').indexOf(classname);
    if (hasClass >= 0) return false;
    const div = document.createElement('div');
    let padding = 100;
    const height = frame.offsetHeight;
    const width = frame.offsetWidth;
    if (height !== width) {
      padding = height / width * 100;
    }
    div.style.paddingTop = `${padding}%`;
    frame.height = frame.width = '';
    div.className += classname;
    frame.parentNode.insertBefore(div, frame);
    frame.parentNode.removeChild(frame);
    div.appendChild(frame);
  }
  return this;
}
export default function (selector, cssClass) {
  return new Reframe(selector, cssClass);
}
