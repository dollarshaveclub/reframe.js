QUnit.test("select an iframe with an Id", function(assert) {
  $('#iframe').reframe();
  assert.equal($('.js-reframe').length, 1, 'there is 1 iframes');
});
QUnit.test("test that reframe ran & didnt select one", function(assert) {
  $('.iframe:not([title="not this one"])').reframe();
  assert.equal($('.js-reframe').length, 3, 'there are 2 iframes');
});
