/* global document, window */

// noframer () 🖼
// -------------
// takes 2 args:
// => target: targeted <element>
// => container: optional targeted <parent> of targeted <element>
// -------------
// defines the height/width ratio of the targeted <element>
// based on the targeted <parent> width
function noframer(target, container) {
  const frame = target;
  const height = frame.offsetHeight;
  const width = frame.offsetWidth;
  const frameStyle = frame.style;
  // gets/sets the height/width ratio
  // => if a targeted <parent> element is defined
  if (typeof container !== 'undefined') {
    const parent = document.querySelector(container);
    const maxwidth = window.getComputedStyle(parent, null).getPropertyValue('max-width');
    frameStyle.width = '100%';
    frameStyle.maxHeight = `calc(${maxwidth} * ${height}/${width})`;
  // gets/sets the height/width ratio
  // => if a targeted <element> closest parent <element> is NOT defined
  } else {
    const maxwidth = `${width}px`;
    frameStyle.display = 'block';
    frameStyle.marginLeft = 'auto';
    frameStyle.marginRight = 'auto';
    let fullwidth = `${maxwidth}px`;
    const frameParent = frame.parentElement;
    // if targeted <element> width is > than it's parent <element>
    // => set the targeted <element> maxheight/fullwidth to it's parent <element>
    if (width > frameParent.offsetWidth) {
      fullwidth = frameParent.offsetWidth;
      frameStyle.maxHeight = `calc(${fullwidth}px * ${height}/${width})`;
    } else {
      frameStyle.maxHeight = `calc(${maxwidth} * ${height}/${width})`;
    }
    frameStyle.width = `${fullwidth}px`;
  }
  // set a calculated height of the targeted <element>
  frameStyle.height = `calc(100vw * ${height}/${width})`;
  frameStyle.maxWidth = '100vw';
}

// plugin code 🔌
// ---------------
export default function noframe(target, container) {
  let frames = (typeof target === 'string') ? document.querySelectorAll(target) : target;
  if (!('length' in frames)) frames = [frames];
  for (let i = 0; i < frames.length; i += 1) {
    const frame = frames[i];
    noframer(frame, container);
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
