const iframes = '<iframe id="iframe" width="315" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe><iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe><iframe class="iframe" width="315" height="560" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe><iframe class="iframe" title="not this one" width="560" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe><iframe class="unique" width="560" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe>';
var test = document.getElementById('test');
test.insertAdjacentHTML('afterbegin', iframes);
QUnit.test('select an iframe with an Id', function(assert) {
  reframe('#iframe');
  assert.equal(document.querySelectorAll('.js-reframe').length, 1, 'there is 1 iframes');
});
QUnit.test('select an iframe with classes', function(assert) {
  reframe('.iframe');
  assert.equal(document.querySelectorAll('.js-reframe').length, 4, 'there is 4 iframes with similar classes');
});
QUnit.test('test that reframe ran & didnt select one', function(assert) {
  reframe('.unique', 'js-test');
  assert.equal(document.querySelectorAll('.js-test').length, 1, 'there is 1 unique iframe');
});
