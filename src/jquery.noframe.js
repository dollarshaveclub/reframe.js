/* global document, window */
import noframer from './noframer';

export default function noframe(target, cName) {
  let frames = (typeof target === 'string') ? document.querySelectorAll(target) : target;
  if (!('length' in frames)) frames = [frames];
  for (let i = 0; i < frames.length; i += 1) {
    const frame = frames[i];
    noframer(frame, cName);
  }
}

if (typeof window !== 'undefined') {
  const plugin = window.$ || window.jQuery || window.Zepto;
  if (plugin) {
    plugin.fn.noframe = function noframePlugin(cName) {
      noframe(this, cName);
    };
  }
}
