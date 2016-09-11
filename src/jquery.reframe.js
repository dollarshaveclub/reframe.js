// jquery.reframe.js
// - runs for all selector unless otherwise specified
// - it JUST creates a fluid wrapper
(function reframeFunc($) {
  $.fn.reframe = function() {
    const $this = $(this);
    if (
      $this.length <= 0 ||
      $this.parent().hasClass('js-reframe')
    ) return false;
    const height = $this.outerHeight();
    const width = $this.outerWidth();
    $this.removeAttr('height align');
    let padding = 100;
    if (height !== width) {
      padding = height / width * 100;
    }
    const div = `<div class="js-reframe" style="padding-top: ${padding}%"></div>`;
    return $this.wrap(div);
  };
}(jQuery));
