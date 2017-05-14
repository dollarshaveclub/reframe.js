var iframes = '<div class="parent" style="max-width: 700px"><iframe id="iframe" width="315" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe></div><div class="other-parent"><iframe id="other-iframe" width="315" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe></div><div><iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe></div>';
var test = document.getElementById('test');
test.insertAdjacentHTML('afterbegin', iframes);
$(window).on('load', function() {
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
});
