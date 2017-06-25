/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// modules 📥
const gulp = require('gulp');
const head = require('gulp-header');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const qunit = require('node-qunit-phantomjs');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const cleanup = require('rollup-plugin-cleanup');
const eslint = require('rollup-plugin-eslint');
const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');
const commonjs = require ('rollup-plugin-commonjs');
const pkg = require('./package.json');

// banner 🚩
// added to all minified files
const banner = `/*
  * <%= pkg.name %> - <%= pkg.description %>
  * @version v<%= pkg.version %>
  * @link <%= pkg.homepage %>
  * @author <%= pkg.author %>
  * @license <%= pkg.license %>
*/
`;

// plugins 🔌
// --------
// currently there are 4 ways to use reframe
// - reframe (vanilla js)
// - noframe (vanilla js)
// - jquery.reframe (jQuery/Zepto support for reframe)
// - jquery.noframe (jQuery/Zepto support for noframe)
const plugins = ['reframe', 'noframe', 'jquery.reframe', 'jquery.noframe'];
// rollup plugin defaults
const resolveObj = {
  jsnext: true,
  main: true,
  browser: true,
};
const excludeOjb = {
  exclude: 'node_modules/**',
};
const rollupPlugins = [
  resolve(resolveObj),
  commonjs(),
  babel(excludeOjb),
  cleanup(),
];

// builds reframe
gulp.task('build:reframe', () => {
  rollup.rollup({
    entry: 'src/reframe.js',
    plugins: rollupPlugins,
  }).then((bundle) => {
    bundle.write({
      dest: 'dist/reframe.js',
      format: 'umd',
      moduleName: 'reframe',
      sourceMap: false,
      treeshake: false,
    });
  });
});

// builds noframe
gulp.task('build:noframe', () => {
  rollup.rollup({
    entry: 'src/noframe.js',
    plugins: rollupPlugins,
  }).then((bundle) => {
    bundle.write({
      dest: 'dist/noframe.js',
      format: 'umd',
      moduleName: 'noframe',
      sourceMap: false,
      treeshake: false,
    });
  });
});

// builds jquery reframe
gulp.task('build:jquery-reframe', () => {
  rollup.rollup({
    entry: 'src/jquery.reframe.js',
    plugins: rollupPlugins,
  }).then((bundle) => {
    bundle.write({
      dest: 'dist/jquery.reframe.js',
      format: 'umd',
      moduleName: 'reframe',
      sourceMap: false,
      treeshake: false,
    });
  });
});

// builds jquery noframe
gulp.task('build:jquery-noframe', () => {
  rollup.rollup({
    entry: 'src/jquery.noframe.js',
    plugins: rollupPlugins,
  }).then((bundle) => {
    bundle.write({
      dest: 'dist/jquery.noframe.js',
      format: 'umd',
      moduleName: 'noframe',
      sourceMap: false,
      treeshake: false,
    });
  });
});

// builds all reframe plugins
gulp.task('build', ['build:reframe', 'build:noframe', 'build:jquery-reframe', 'build:jquery-noframe']);

// minify
// minify all plugins 🔌
gulp.task('minify', function() {
  for (var i = 0; i < plugins.length; i += 1) {
    var plugin = plugins[i];
    gulp.src(`dist/${plugin}.js`)
      .pipe(uglify())
      .pipe(head(banner, { pkg }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('dist/'));
  }
});

// tests ✔️
// test each plugin
// user qunit with phantom
gulp.task('test:reframe', () => qunit('tests/reframe/index.html'));
gulp.task('test:noframe', () => qunit('tests/noframe/index.html'));
gulp.task('test:jquery-reframe', () => qunit('tests/jquery-reframe/index.html'));
gulp.task('test:jquery-noframe', () => qunit('tests/jquery-noframe/index.html'));
gulp.task('test', ['test:reframe', 'test:noframe', 'test:jquery-reframe', 'test:jquery-noframe']);

gulp.task('default', ['build', 'minify', 'test']);
