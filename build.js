#!/usr/bin/env node
const { build } = require('estrella');
const postCssPlugin = require('@johnie/esbuild-plugin-postcss');

build({
  entry: 'src/index.js',
  outfile: 'dist/index.js',
  bundle: true,
  loader: {
    '.js': 'jsx',
  },
  platform: 'browser',
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  plugins: [
    postCssPlugin({
      plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    }),
  ],
});
