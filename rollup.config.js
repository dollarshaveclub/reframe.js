// rollup bundle commands
// rollup -c => builds reframe (default)
// rollup -c --environment entry:noframe => builds noframe

import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const name = process.env.entry ? process.env.entry : 'reframe';
export default {
  entry: `src/${name}.js`,
  dest: `dist/${name}.js`,
  format: 'umd',
  moduleName: `${name}`,
  sourceMap: false, // removes the souremap at the bottom of the file
  treeshake: false,
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
