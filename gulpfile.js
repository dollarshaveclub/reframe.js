const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cssNano = require('gulp-cssnano');
const qunit = require('node-qunit-phantomjs');
const babel = require('gulp-babel');

gulp.task('styles', () => {
  gulp
    .src('src/styles/_reframe_mixin.scss')
    .pipe(gulp.dest('dist/'));
  gulp
    .src('src/styles/reframe.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({basename: '_reframe', extname: '.scss'}))
    .pipe(gulp.dest('dist/'));
  gulp
    .src('src/styles/reframe.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssNano())
    .pipe(gulp.dest('dist/'));
});

gulp.task('test', function() {
  qunit('src/tests/reframe/index.html');
  qunit('src/tests/noframe/index.html');
});

gulp.task('default', ['styles', 'test']);
