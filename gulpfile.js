const gulp = require('gulp');
const qunit = require('node-qunit-phantomjs');

gulp.task('test', function() {
  qunit('tests/reframe/index.html');
  qunit('tests/noframe/index.html');
});

gulp.task('default', ['test']);
