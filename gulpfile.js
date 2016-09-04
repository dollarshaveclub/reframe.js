const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const rename = require('gulp-rename');
const purifyCss = require('gulp-purifycss');

gulp.task('styles', () => {

  gulp
    .src('src/styles/package-only/main.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(purifyCss(['index.html']))
    .pipe(gulp.dest(''));
  gulp
    .src('src/styles/_reframe.scss')
    .pipe(rename({basename: 'reframe', extname: '.css'}))
    .pipe(gulp.dest('dist/'));

  gulp
    .src('src/styles/_reframe.scss')
    .pipe(gulp.dest('dist/'));

});

gulp.task('default', ['styles']);
