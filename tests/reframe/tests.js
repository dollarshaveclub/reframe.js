// tests reframe.js 🖼 (vanilla—no plugin)

// load test content
var test = document.getElementById('test');
const iframes = '<iframe id="iframe" width="315" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe><iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe><iframe class="iframe" width="315" height="560" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe><iframe class="iframe" title="not this one" width="560" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe><iframe class="unique" width="560" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe>';
test.insertAdjacentHTML('afterbegin', iframes);

var idIframe = $('#iframe');
// test that there can be tests
QUnit.test('there is #test id', function(assert) {
  assert.equal(document.querySelectorAll('#test').length, 1, 'there is a #test <div>');
});
// test that reframe.js works when selected by an Id
QUnit.test('reframe by #Id', function(assert) {
  reframe('#iframe');
  assert.equal($('.js-reframe #iframe').length, 1, 'there is 1 reframed <elements> with #iframe');
});

// test that the intrinsic ratio is working
// QUnit.test('check to make sure that the reframe intrinsic ratio is working', function(assert) {
//   // set up the ratios to be tested
//   var $iframe = $('#iframe');
//   // get the actual size of the iframe
//   var iframeWidth = $iframe.width();
//   var iframeHeight = $iframe.height();
//   var iframeRatio = (iframeHeight * iframeWidth) / 100;
//   console.log(iframeWidth, iframeHeight, iframeRatio);
//   // get the relative size of the parent
//   var $iframeParent = $iframe.parents('.js-reframe');
//   var parentWidth = $iframeParent.css('width');
//   var parentHeight = $iframeParent.css('padding-top');
//   var parentRatio = (parentHeight * parentWidth) / 100;
//   console.log(parentWidth, parentHeight, parentRatio);
//   // compare that both ratios are working
//   assert.equal(iframeRatio, parentRatio, 'reframe intrinsic ratio is working');
// });

// test that reframe.js works when selecting multiple elements with classes
QUnit.test('reframe <elements> with multiple classes', function(assert) {
  reframe('.iframe');
  console.log('TEST: ', $('.js-reframe .iframe').length);
  assert.equal($('.js-reframe .iframe').length, 3, 'there are 3 reframed <elements> with similar classes');
});

// test that reframe.js works when adding a unique class (.js-test) instead of .js-reframe
QUnit.test('reframe an <element> and add a unique css class', function(assert) {
  reframe('.unique', 'js-test');
  assert.equal($('.js-test').length, 1, 'there is 1 iframe with the class .js-test');
});
