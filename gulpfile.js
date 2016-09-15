const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const purifyCss = require('gulp-purifycss');
const cssNano = require('gulp-cssnano');

gulp.task('copy', () => {
  gulp.src('node_modules/reframe.js/dist/reframe.js')
    .pipe(gulp.dest(''));

});

gulp.task('styles', () => {
  return gulp
    .src('src/styles/package-only/main.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(purifyCss(['index.html']))
    .pipe(cssNano())
    .pipe(gulp.dest(''));

});

gulp.task('default', ['copy', 'styles']);
