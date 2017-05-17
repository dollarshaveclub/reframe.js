// tests jquery.reframe.js 🖼 (jquery/zepto plugin)
// => these tests are stictly for jquery.reframe
// -----
// - they tests assume that the reframe ratio is already working 💪

// load test content
var test = document.getElementById('test');
var iframes = '<iframe id="iframe" width="315" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe><iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe><iframe class="iframe" width="315" height="560" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe><iframe class="iframe" title="not this one" width="560" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe><iframe class="unique" width="560" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe>';
var test = document.getElementById('test');
test.insertAdjacentHTML('afterbegin', iframes);

// test that jquery.reframe works with an Id
QUnit.test('select an iframe with an Id', function(assert) {
  $('#iframe').reframe();
  assert.equal($('.js-reframe #iframe').length, 1, 'there is 1 iframes');
});

// test that jquery.reframe works with multiple css classes
QUnit.test('select an iframe with classes', function(assert) {
  $('.iframe').reframe();
  assert.equal($('.js-reframe .iframe').length, 3, 'there are 3 reframed <elements> with similar classes');
});

// test that jquery.reframe can add unique css classes instead
QUnit.test('test that reframe ran & didnt select one', function(assert) {
  $('.unique').reframe('js-test');
  assert.equal($('.js-test .unique').length, 1, 'there is 1 reframed <element> with the css class .js-test');
});
