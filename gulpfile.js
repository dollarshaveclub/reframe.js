const gulp = require('gulp');
const head = require('gulp-header');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const qunit = require('node-qunit-phantomjs');
const pkg = require('./package.json');

// banner 🚩
// added to all minified files
const banner = `/*
  * <%= pkg.name %> - <%= pkg.description %>
  * @version v<%= pkg.version %>
  * @link <%= pkg.homepage %>
  * @author <%= pkg.author %>
  * @license <%= pkg.license %> */`;

// tests ✔️
// test each plugin
// user qunit with phantom
gulp.task('test-reframe', () => qunit('tests/reframe/index.html'));
gulp.task('test-noframe', () => qunit('tests/noframe/index.html'));
gulp.task('test-jquery-reframe', () => qunit('tests/jquery-reframe/index.html'));
gulp.task('test-jquery-noframe', () => qunit('tests/jquery-noframe/index.html'));
gulp.task('test', ['test-reframe', 'test-noframe', 'test-jquery-reframe', 'test-jquery-noframe']);

// plugins 🔌
const plugins = ['reframe', 'noframe', 'jquery.reframe', 'jquery.noframe'];

// minify
// minify all plugins 🔌
gulp.task('minify', function() {
  for (let i = 0; i < plugins.length; i += 1) {
    plugin = plugins[i];
    gulp.src(`dist/${plugin}.js`)
      .pipe(uglify())
      .pipe(head(banner, { pkg }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('dist/'));
  }
});

gulp.task('default', ['test', 'minify']);
