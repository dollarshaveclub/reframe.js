function Reframe(target, cName) {
  let frames = typeof target === 'string' ? document.querySelectorAll(target) : target;
  if (!('length' in frames)) {
    frames = [frames];
  }
  const classname = cName || 'js-reframe';
  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];
    const hasClass = frame.className.split(' ').indexOf(classname);
    if (hasClass >= 0) return false;
    const div = document.createElement('div');
    const height = frame.offsetHeight;
    const width = frame.offsetWidth;
    const padding = height / width * 100;
    div.style.paddingTop = `${padding}%`;
    frame.height = frame.width = '';
    div.className += classname;
    frame.parentNode.insertBefore(div, frame);
    frame.parentNode.removeChild(frame);
    div.appendChild(frame);
  }
  return this;
}
export default function (target, cName) {
  return new Reframe(target, cName);
}

if (window.$ || window.jQuery || window.Zepto) {
  window.$.fn.extend({
    reframe: function reframeFunc(cName) {
      return new Reframe(this, cName);
    },
  });
}
