(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.reframe = factory());
}(this, (function () { 'use strict';

function Reframe(selector, cName) {
  var frames = document.querySelectorAll(selector);
  var classname = typeof cName !== 'undefined' ? cName : 'js-reframe';
  if (frames.length <= 0) return false;
  for (var i = 0; i < frames.length; i++) {
    var frame = frames[i];
    var hasClass = frame.className.split(' ').indexOf(classname);
    if (hasClass >= 0) return false;
    var div = document.createElement('div');
    var padding = 100;
    var height = frame.offsetHeight;
    var width = frame.offsetWidth;
    console.log(height, width);
    if (height !== width) {
      padding = height / width * 100;
    }
    div.style.paddingTop = padding + '%';
    frame.height = frame.width = '';
    div.className += classname;
    frame.parentNode.insertBefore(div, frame);
    frame.parentNode.removeChild(frame);
    div.appendChild(frame);
  }
  return this;
}
function reframe (selector, cssClass) {
  return new Reframe(selector, cssClass);
}

return reframe;

})));