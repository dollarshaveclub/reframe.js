/* global document, window */

import noframer from './noframer';

// plugin code 🔌
// ---------------
export default function noframe(target, container) {
  let frames = document.querySelectorAll(target);
  if (!('length' in frames)) frames = [frames];
  for (let i = 0; i < frames.length; i += 1) {
    const frame = frames[i];
    noframer(frame, container);
  }
}
