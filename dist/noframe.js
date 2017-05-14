(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.noframe = factory());
}(this, (function () { 'use strict';

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
  var frame = target;
  var height = frame.offsetHeight;
  var width = frame.offsetWidth;
  var frameStyle = frame.style;
  // gets/sets the height/width ratio
  // => if a targeted <parent> element is defined
  if (typeof container !== 'undefined') {
    var parent = document.querySelector(container);
    var maxwidth = window.getComputedStyle(parent, null).getPropertyValue('max-width');
    frameStyle.width = '100%';
    frameStyle.maxHeight = 'calc(' + maxwidth + ' * ' + height + '/' + width + ')';
    // gets/sets the height/width ratio
    // => if a targeted <element> closest parent <element> is NOT defined
  } else {
    var _maxwidth = width + 'px';
    frameStyle.display = 'block';
    frameStyle.marginLeft = 'auto';
    frameStyle.marginRight = 'auto';
    var fullwidth = _maxwidth + 'px';
    var frameParent = frame.parentElement;
    // if targeted <element> width is > than it's parent <element>
    // => set the targeted <element> maxheight/fullwidth to it's parent <element>
    if (width > frameParent.offsetWidth) {
      fullwidth = frameParent.offsetWidth;
      frameStyle.maxHeight = 'calc(' + fullwidth + 'px * ' + height + '/' + width + ')';
    } else {
      frameStyle.maxHeight = 'calc(' + _maxwidth + ' * ' + height + '/' + width + ')';
    }
    frameStyle.width = fullwidth + 'px';
  }
  // set a calculated height of the targeted <element>
  frameStyle.height = 'calc(100vw * ' + height + '/' + width + ')';
  frameStyle.maxWidth = '100vw';
}

// plugin code 🔌
// ---------------
function noframe(target, container) {
  var frames = typeof target === 'string' ? document.querySelectorAll(target) : target;
  if (!('length' in frames)) frames = [frames];
  for (var i = 0; i < frames.length; i += 1) {
    var frame = frames[i];
    noframer(frame, container);
  }
}

return noframe;

})));
