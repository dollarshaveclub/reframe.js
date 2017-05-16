// tests jquery.noframe.js 🖼 (jquery/zepto plugin)
// => these tests are stictly for jquery.noframe
// -----
// - they tests assume that the reframe ratio is already working 💪

// load test content
var iframes = '<div><iframe id="jQuery" width="560" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe></div><div id="other-jQuery-parent" style="max-width: 400px"><iframe id="other-jQuery" width="560" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe></div>';
var test = document.getElementById('test');
test.insertAdjacentHTML('afterbegin', iframes);

QUnit.test("test this iframe with jQuery", function(assert) {
  $('#jQuery').noframe();
  assert.equal($('#jQuery').length, 1, 'there is 1 iframe with the class .unique');
});
QUnit.test("test this iframe with jQuery parent", function(assert) {
  $('#other-jQuery').noframe('#other-jQuery-parent');
  assert.equal($('#other-jQuery').length, 1, 'there is 1 iframe with the class .unique');
});
