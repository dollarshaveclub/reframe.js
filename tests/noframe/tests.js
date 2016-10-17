noframe('#iframe', '.parent');
noframe('#other-iframe', '.other-parent');
noframe('.iframe');
noframe('.unique', 'false');
QUnit.test("noframe with an inline max-width", function(assert) {
  noframe('#iframe', '.parent');
  assert.equal(document.querySelectorAll('#iframe').length, 1, 'there is 1 noframe with an id');
});
QUnit.test("noframe without an inline max-width", function(assert) {
  noframe('#other-iframe', '.other-parent');
  assert.equal(document.querySelectorAll('#other-iframe').length, 1, 'there is 1 noframe with an id');
});
QUnit.test("noframe this false set", function(assert) {
  noframe('.iframe');
  assert.equal(document.querySelectorAll('.iframe').length, 1, 'there is 1 iframe with the class .iframe');
});
QUnit.test("test this iframe with jQuery", function(assert) {
  $('#jQuery').noframe();
  assert.equal(document.querySelectorAll('#jQuery').length, 1, 'there is 1 iframe with the class .unique');
});
QUnit.test("test this iframe with jQuery parent", function(assert) {
  $('#other-jQuery').noframe('#other-jQuery-parent');
  assert.equal(document.querySelectorAll('#other-jQuery').length, 1, 'there is 1 iframe with the class .unique');
});
