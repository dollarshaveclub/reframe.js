var iframes = '<div class="parent" style="max-width: 700px"><iframe id="iframe" width="315" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe></div><div class="other-parent"><iframe id="other-iframe" width="315" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe></div><iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe><iframe id="jQuery" width="560" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe><div id="other-jQuery-parent" style="max-width: 400px"><iframe id="other-jQuery" width="560" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe></div>';
var test = document.getElementById('test');
noframe('#iframe', '.parent');
noframe('#other-iframe', '.other-parent');
noframe('.iframe');
noframe('.unique', 'false');
QUnit.test("test this iframe with jQuery", function(assert) {
  $('#jQuery').noframe();
  assert.equal(document.querySelectorAll('#jQuery').length, 1, 'there is 1 iframe with the class .unique');
});
QUnit.test("test this iframe with jQuery parent", function(assert) {
  $('#other-jQuery').noframe('#other-jQuery-parent');
  assert.equal(document.querySelectorAll('#other-jQuery').length, 1, 'there is 1 iframe with the class .unique');
});
