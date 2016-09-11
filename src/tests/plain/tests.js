QUnit.test("select an iframe with an Id", function(assert) {
  reframe('#iframe');
  assert.equal(document.querySelectorAll('.js-reframe').length, 1, 'there is 1 iframes');
});
QUnit.test("test that reframe ran & didnt select one", function(assert) {
  reframe('.iframe:not([title="not this one"])');
  assert.equal(document.querySelectorAll('.js-reframe').length, 3, 'there are 2 iframes');
});
