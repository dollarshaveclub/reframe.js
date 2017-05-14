(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.reframe = factory());
}(this, (function () { 'use strict';

/* global document, window */

// reframer () 🖼
// -------------
// takes 2 args:
// => target: targeted <element>
// => cname: optional custom classname
// -------------
// defines the height/width ratio of the targeted <element>
function reframer(target, cName) {
  var frame = target;
  var classname = cName || 'js-reframe';
  // makes sure reframe is not run more than 1x ✔️
  var hasClass = frame.className.split(' ').indexOf(classname) !== -1;
  if (hasClass) return;

  // general targeted <element> sizes
  var height = frame.offsetHeight;
  var width = frame.offsetWidth;
  var padding = height / width * 100;

  // created element <wrapper> of general reframed item
  // => set necessary styles of created element <wrapper>
  var div = document.createElement('div');
  div.className = classname;
  var divStyle = div.style;
  divStyle.position = 'relative';
  divStyle.width = '100%';
  divStyle.paddingTop = padding + '%';

  // set necessary styles of targeted <element>
  var frameStyle = frame.style;
  frameStyle.position = 'absolute';
  frameStyle.width = '100%';
  frameStyle.height = '100%';
  frameStyle.left = '0';
  frameStyle.top = '0';

  // reframe targeted <element>
  frame.parentNode.insertBefore(div, frame);
  frame.parentNode.removeChild(frame);
  div.appendChild(frame);
}

// plugin code 🔌
// ---------------
function reframe(target, cName) {
  var frames = typeof target === 'string' ? document.querySelectorAll(target) : target;
  if (!('length' in frames)) frames = [frames];
  for (var i = 0; i < frames.length; i += 1) {
    var frame = frames[i];
    reframer(frame, cName);
  }
}

return reframe;

})));
