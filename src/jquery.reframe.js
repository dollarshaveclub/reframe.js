// jquery.reframe.js
// - runs for all selector unless otherwise specified
// - it JUST creates a fluid wrapper
(function reframeFunc($) {
  $.fn.reframe = function(cName) {
    const classname = typeof cName !== 'undefined' ? cName : 'js-reframe';
    $(this).each(function() {
      const $this = $(this);
      if (
        $this.length <= 0 ||
        $this.parent().hasClass(classname)
      ) return false;
      const height = $this.outerHeight();
      const width = $this.outerWidth();
      $this.removeAttr('height width');
      let padding = 100;
      if (height !== width) {
        padding = height / width * 100;
      }
      const div = `<div class="${classname}" style="padding-top: ${padding}%"></div>`;
      return $this.wrap(div);
    });
  };
}(jQuery));
