const gulp = require('gulp');
const qunit = require('node-qunit-phantomjs');

gulp.task('test', function() {
  qunit('src/tests/reframe/index.html');
  qunit('src/tests/noframe/index.html');
});

gulp.task('default', ['test']);
