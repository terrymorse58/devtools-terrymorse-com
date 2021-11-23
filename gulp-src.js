const { series, src, dest } = require('gulp');
const replace = require('gulp-replace');
const touch = require('gulp-touch-fd');

const CDN_IMGS = 'https://cdn.jsdelivr.net/gh/terrymorse58/devtools-terrymorse-com/src/imgs/';

const SRC = './src/';
const DIST = 'dist/';

function copySrc () {
  return src(SRC + '**/*')
    .pipe(dest(DIST));
}

function copyIndex () {
  return src(SRC + 'index.html')
    .pipe(replace(
      /"imgs\//g,
      `"${CDN_IMGS}`
    ))
    .pipe(dest(DIST))
    .pipe(touch());
}

exports.default = series(copySrc, copyIndex);
