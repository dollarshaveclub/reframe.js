// rollup bundle commands
// rollup -c --environment entry:noframe
// rollup -c --environment entry:reframe

import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: `src/${process.env.entry}.js`,
  dest: `dist/${process.env.entry}.js`,
  format: 'umd',
  moduleName: `${process.env.entry}`,
  sourceMap: false, // removes the souremap at the bottom of the file
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    eslint({
      exclude: [
        'src/styles/**'
      ]
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
