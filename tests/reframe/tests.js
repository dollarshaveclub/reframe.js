// tests reframe.js 🖼 (vanilla—no plugin)

// load test content
var test = document.getElementById('test');
const iframes = '<iframe id="iframe" width="315" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe><iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe><iframe class="iframe" width="315" height="560" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe><iframe class="iframe" title="not this one" width="560" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe><iframe class="unique" width="560" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe>';
test.insertAdjacentHTML('afterbegin', iframes);

// setup intrinsic ra
var idIframe = $('#iframe');
var iframeWidth = idIframe.width();
var iframeHeight = idIframe.height();
// test that there can be tests
QUnit.test('there is #test id', function(assert) {
  assert.equal(document.querySelectorAll('#test').length, 1, 'there is a #test <div>');
});
// test that reframe.js works when selected by an Id
QUnit.test('reframe by #Id', function(assert) {
  reframe('#iframe');
  assert.equal($('.js-reframe #iframe').length, 1, 'there is 1 reframed <elements> with #iframe');
});

// test that reframe.js works when selecting multiple elements with classes
QUnit.test('reframe <elements> with multiple classes', function(assert) {
  reframe('.iframe');
  assert.equal($('.js-reframe .iframe').length, 3, 'there are 3 reframed <elements> with similar classes');
});

// test that reframe.js works when adding a unique class (.js-test) instead of .js-reframe
QUnit.test('reframe an <element> and add a unique css class', function(assert) {
  reframe('.unique', 'js-test');
  assert.equal($('.js-test').length, 1, 'there is 1 iframe with the class .js-test');
});

// test that the intrinsic ratio is working
$(window).on('load', function() {
  QUnit.test('check to make sure that the reframe intrinsic ratio is working', function(assert) {
    // see variables stored above (before reframe is run)
    var iframeRatio = iframeHeight / iframeWidth;
    // set up ratio after reframe has been run
    var iframeOuterWidth = idIframe.outerWidth();
    var iframeOuterHeight = idIframe.outerHeight();
    var iframeOuterRatio = iframeOuterWidth / iframeOuterHeight;
    // compare that both ratios are working
    assert.equal(iframeRatio, iframeOuterRatio, 'reframe intrinsic ratio is working');
  });
});
