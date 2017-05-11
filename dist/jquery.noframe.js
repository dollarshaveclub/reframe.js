(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

/* global document, window */
function framer(target, container) {
  var frame = target;
  var height = frame.offsetHeight;
  var width = frame.offsetWidth;
  var frameStyle = frame.style;
  if (typeof container !== 'undefined') {
    var parent = document.querySelector(container);
    var maxwidth = window.getComputedStyle(parent, null).getPropertyValue('max-width');
    frameStyle.width = '100%';
    frameStyle.maxHeight = 'calc(' + maxwidth + ' * ' + height + '/' + width + ')';
  } else {
    var _maxwidth = width + 'px';
    frameStyle.display = 'block';
    frameStyle.marginLeft = 'auto';
    frameStyle.marginRight = 'auto';
    var fullwidth = _maxwidth + 'px';
    if (width > frame.parentElement.offsetWidth) {
      fullwidth = frame.parentElement.offsetWidth;
      frameStyle.maxHeight = 'calc(' + fullwidth + 'px * ' + height + '/' + width + ')';
    } else {
      frameStyle.maxHeight = 'calc(' + _maxwidth + ' * ' + height + '/' + width + ')';
    }
    frameStyle.width = fullwidth + 'px';
  }
  frameStyle.height = 'calc(100vw * ' + height + '/' + width + ')';
  frameStyle.maxWidth = '100vw';
}

/* global document, window */
if (typeof window !== 'undefined') {
  var plugin = window.$ || window.jQuery || window.Zepto;
  if (plugin) {
    plugin.fn.noframe = function noframePlugin(container) {
      noframe(this, container);
    };
  }
}

})));
