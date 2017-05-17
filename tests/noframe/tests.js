// tests noframe.js 🖼 (vanilla—no plugin)

// load test content
var test = document.getElementById('test');
var iframes = '<div class="parent" style="max-width: 700px"><iframe id="iframe" width="315" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe></div><div class="other-parent"><iframe id="other-iframe" width="315" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe></div><div><iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe></div>';
test.insertAdjacentHTML('afterbegin', iframes);

// setup intrinsic ratio test
var idIframe = $('#iframe');
var iframeWidth = idIframe.width();
var iframeHeight = idIframe.height();

$(window).on('load', function() {
  // test that there can be tests
  QUnit.test('there is #test id', function(assert) {
    assert.equal(document.querySelectorAll('#test').length, 1, 'there is a #test <div>');
  });

  // test that noframe.js works when selecting a class
  QUnit.test("noframe styles are being set", function(assert) {
    noframe('#iframe');
    var $iframe = $('#iframe');
    var iframeHasHeight = $iframe.css('height').length > 0;
    var iframeHasMaxWidth = $iframe.css('max-width').length > 0;
    var iframeHasRightMargin = $iframe.css('margin-right').length > 0;
    var iframeHasLeftMargin = $iframe.css('margin-left').length > 0;
    assert.equal(iframeHasMaxWidth, true, 'noframe styles are being set');
    assert.equal(iframeHasHeight, true, 'noframe styles are being set');
    assert.equal(iframeHasRightMargin, true, 'noframe styles are being set');
    assert.equal(iframeHasLeftMargin, true, 'noframe styles are being set');
  });

  // test that noframe.js works when selecting a a parent
  QUnit.test("the noframed element is the same width as it's parent", function(assert) {
    noframe('#other-iframe', '.other-parent');
    var $parent = $('.other-parent');
    var parentWidth = $parent.outerWidth();
    var $iframe = $('#other-iframe');
    var iframeWidth = $iframe.outerWidth();
    assert.equal(parentWidth, iframeWidth, 'the parent <element> and noframed <element> are the same width');
  });

  // test that the intrinsic ratio is working
  QUnit.test("check to make sure that the noframe intrinsic ratio is working", function(assert) {
    // see variables stored above (before reframe is run)
    var iframeRatio = iframeHeight / iframeWidth;
    // set up ratio after reframe has been run
    var iframeOuterWidth = idIframe.outerWidth();
    var iframeOuterHeight = idIframe.outerHeight();
    var iframeOuterRatio = iframeOuterWidth / iframeOuterHeight;
    assert.equal(iframeRatio, iframeOuterRatio, 'noframe intrinsic ratio is working');
  });
});
