const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const rename = require('gulp-rename');
const purifyCss = require('gulp-purifycss');
const cssNano = require('gulp-cssnano');

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
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(cssNano())
    .pipe(gulp.dest('dist/'));
  return gulp
    .src('src/styles/package-only/main.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(purifyCss(['index.html']))
    .pipe(cssNano())
    .pipe(gulp.dest(''));

});

gulp.task('default', ['styles']);
