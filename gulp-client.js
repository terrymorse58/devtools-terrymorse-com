const { series, src, dest } = require('gulp');
// const replace = require('gulp-replace');

const SRC = './src/';
const DIST = 'dist/';


function copyTopLevelFiles() {
  return src([
    SRC + 'index.html',
    SRC + '.htaccess',
    SRC + 'favicon.ico',
    SRC + 'google4b2934c4a8f6a0cb.html',
    SRC + 'sitemap.xml'
  ])
    .pipe(dest(DIST));
}

function copyDemos () {
  return src(SRC + 'demos*/**/*')
    .pipe(dest(DIST));
}

function copyImgs () {
  return src(SRC + 'imgs*/*')
    .pipe(dest(DIST));
}

function copyPackages () {
  return src(SRC + 'packages*/**/*')
    .pipe(dest(DIST));
}

function copyPersonal () {
  return src(SRC + 'personal*/**/*')
    .pipe(dest(DIST));
}

function copyPrivate () {
  return src(SRC + 'private*/**/*')
    .pipe(dest(DIST));
}

function copyProducts () {
  return src(SRC + 'products*/**/*')
    .pipe(dest(DIST));
}

function copyPublic () {
  return src(SRC + 'public*/**/*')
    .pipe(dest(DIST));
}

function copyTerry () {
  return src(SRC + 'terry*/**/*')
    .pipe(dest(DIST));
}

exports.default = series(copyTopLevelFiles, copyDemos, copyImgs, copyPackages,
  copyPersonal, copyPrivate, copyProducts, copyPublic, copyTerry
);
