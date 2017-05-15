/* global document, window */
import reframer from './reframer';

export default function reframe(target, cName) {
  let frames = (typeof target === 'string') ? document.querySelectorAll(target) : target;
  if (!('length' in frames)) frames = [frames];
  for (let i = 0; i < frames.length; i += 1) {
    const frame = frames[i];
    reframer(frame, cName);
  }
}

if (typeof window !== 'undefined') {
  const plugin = window.$ || window.jQuery || window.Zepto;
  if (plugin) {
    plugin.fn.reframe = function reframePlugin(cName) {
      reframe(this, cName);
    };
  }
}
