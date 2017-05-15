/* global document, window */

import reframer from './reframer';

// plugin code 🔌
// ---------------
export default function reframe(target, cName) {
  let frames = document.querySelectorAll(target);
  if (!('length' in frames)) frames = [frames];
  for (let i = 0; i < frames.length; i += 1) {
    const frame = frames[i];
    reframer(frame, cName);
  }
}
