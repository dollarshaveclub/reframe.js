export default function reframe(target, cName) {
  let frames = typeof target === 'string' ? document.querySelectorAll(target) : target;
  if (!('length' in frames)) {
    frames = [frames];
  }
  const classname = cName || 'js-reframe';
  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];
    const hasClass = frame.className.split(' ').indexOf(classname);
    if (hasClass >= 0) return;
    const div = document.createElement('div');
    const height = frame.offsetHeight;
    const width = frame.offsetWidth;
    const padding = height / width * 100;
    div.style.paddingTop = `${padding}%`;
    div.style.position = 'relative';
    div.style.width = frame.style.width = frame.style.height = '100%';
    div.className += classname;
    frame.parentNode.insertBefore(div, frame);
    frame.parentNode.removeChild(frame);
    frame.style.left = frame.style.top = '0';
    frame.style.position = 'absolute';
    div.appendChild(frame);
  }
}

const plugin = window.$ || window.jQuery || window.Zepto;
if (plugin) {
  plugin.fn.extend({
    reframe: function reframeFunc(cName) {
      return reframe(this, cName);
    },
  });
}
