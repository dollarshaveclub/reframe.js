'use strict';

// jquery.reframe.js
// - runs for all selector unless otherwise specified
// - it JUST creates a fluid wrapper
(function reframeFunc($) {
  $.fn.reframe = function () {
    var $this = $(this);
    if ($this.length <= 0 || $this.parent().hasClass('js-reframe')) return false;
    var height = $this.outerHeight();
    var width = $this.outerWidth();
    $this.removeAttr('height align');
    var padding = 100;
    if (height !== width) {
      padding = height / width * 100;
    }
    var div = '<div class="js-reframe" style="padding-top: ' + padding + '%"></div>';
    return $this.wrap(div);
  };
})(jQuery);