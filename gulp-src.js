const { series, src, dest } = require('gulp');
// const replace = require('gulp-replace');

const SRC = './src/';
const DIST = 'dist/';

function copySrc () {
  return src(SRC + '**/*')
    .pipe(dest(DIST));
}

exports.default = series(copySrc);
