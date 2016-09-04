import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/reframe.js',
  dest: 'dist/reframe.min.js',
  format: 'iife',
  moduleName: 'Reframe',
  sourceMap: false, // removes the souremap at the bottom of the file
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    eslint({
      exclude: [
        'src/styles/**',
        'dist/reframe.min.js'
      ]
    }),
  ],
};
