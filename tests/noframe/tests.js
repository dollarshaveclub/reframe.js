// tests noframe.js 🖼 (vanilla—no plugin)

// load test content
var test = document.getElementById('test');
var iframes = '<div class="parent" style="max-width: 700px"><iframe id="iframe" width="315" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe></div><div class="other-parent"><iframe id="other-iframe" width="315" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe></div><div><iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/6FQsIfE7sZM" frameborder="0" allowfullscreen></iframe></div>';
test.insertAdjacentHTML('afterbegin', iframes);

$(window).on('load', function() {
  // test that there can be tests
  QUnit.test('there is #test id', function(assert) {
    assert.equal(document.querySelectorAll('#test').length, 1, 'there is a #test <div>');
  });

  // QUnit.test("check to make sure that the noframe intrinsic ratio is working", function(assert) {
  //   var vw = '100vw';
  //   var noFrameWidth = $idIframe.css('max-width');
  //   var noFrameHeight = $idIframe.css('height');
  //   var frameHeight = $idIframe.height();
  //   var frameWidth = $idIframe.width();
  //   var calculatedSize = `calc(${vw} * ${height}/${width})`;
  //   assert.equal(noFrameWidth, vw, 'noframe intrinsic ratio is working');
  //   assert.equal(noFrameHeight, calculatedSize, 'noframe intrinsic ratio is working');
  // });
  QUnit.test("noframe is working ", function(assert) {
    noframe('#other-iframe', '.other-parent');
    assert.equal(document.querySelectorAll('#other-iframe').length, 1, 'there is 1 noframe with an id');
  });
  QUnit.test("noframe this false set", function(assert) {
    noframe('.iframe');
    assert.equal(document.querySelectorAll('.iframe').length, 1, 'there is 1 iframe with the class .iframe');
  });
});
