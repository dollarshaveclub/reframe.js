var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var purifyCSS = require('gulp-purifycss');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');

gulp.task('styles', function() {

  gulp
    .src('src/styles/package-only/index.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(''));

  gulp
    .src('src/styles/_responsive_iframe.scss')
    .pipe(rename({basename: 'responsive-iframe', extname: '.css'}))
    .pipe(gulp.dest('src/styles/'));

});

gulp.task('default',function() {
   gulp.watch('./src/styles/**/*.scss', ['styles']);
});