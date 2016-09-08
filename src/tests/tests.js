// Make sure qunit is running
QUnit.test("a basic test example", function(assert) {
  var value = "hello";
  assert.equal(value, "hello", "We expect value to be hello");
});
// Make sure we selected an iframe with an Id
QUnit.test("select an iframe with an Id", function(assert) {
  var id = document.querySelector('#iframe').id;
  assert.equal(id, "iframe", "We expect value to be 'iframe'");
});
// Make sure we have 3 iframes with classes
QUnit.test("select an iframe with an class", function(assert) {
  var iframes = document.querySelectorAll('.iframe').length;
  assert.equal(iframes, 3, "We expect value to be hello");
});
// Reframe should have ran 3x
QUnit.test("check if reframe ran", function(assert) {
  var reframe = document.querySelectorAll('.js-reframe').length;
  assert.equal(reframe, 3, "We expect value to be 3");
});
// Make sure the last iframe didn't run
QUnit.test("make sure the iframe with a title isn't framed", function(assert) {
  var height = document.querySelector('[title="not this one"]').getAttribute("height");
  assert.equal(height, 315, "We expect value to be true");
});


