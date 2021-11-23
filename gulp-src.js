const { series, src, dest } = require('gulp');
const replace = require('gulp-replace');
const touch = require('gulp-touch-fd');

const CDN_IMGS = 'https://cdn.jsdelivr.net/gh/terrymorse58/devtools-terrymorse-com/dist/imgs/';

const SRC = './src/';
const DIST = 'dist/';

function copySrc () {
  return src([
    SRC + '.htaccess',
    SRC + 'favicon.ico',
    SRC + 'bootsdark-demo*/index.html',
    SRC + 'browser-device-features*/*',
    SRC + 'browserinfo*/index.html',
    SRC + 'browserinfo*/browserinfo.js',
    SRC + 'console-error-button*/*',
    SRC + 'ios-modal*/*',
    SRC + 'pointerevents*/*',
    SRC + 'sticky-hover*/index.html',
    SRC + 'summation-errors*/*',
    SRC + 'window-event-display*/index.html',
    SRC + 'window-event-display*/testing-180x180.png'
  ])
    .pipe(dest(DIST));
}

function copyImgs () {
  return src(SRC + 'imgs*/*')
    .pipe(dest(DIST));
}

function copyCrossFade () {
  src(SRC + 'cross-fade-css-transition/imgs/*')
    .pipe(dest(DIST + 'imgs/'));
  return src(SRC + 'cross-fade-css-transition*/index.html')
    .pipe(replace(
      /src="imgs\//g,
      `src="${CDN_IMGS}`
    ))
    .pipe(dest(DIST))
    .pipe(touch());
}

function copyCustomCard () {
  src(SRC + 'custom-bootstrap-card/imgs/*')
    .pipe(dest(DIST + 'imgs/'));
  return src(SRC + 'custom-bootstrap-card*/index.html')
    .pipe(replace(
      /imgs\//g,
      `${CDN_IMGS}`
    ))
    .pipe(dest(DIST))
    .pipe(touch());
}

function copyImageGalleryOverlay () {
  src(SRC + 'image-gallery-overlay/imgs/*')
    .pipe(dest(DIST + 'imgs/'));
  return src(SRC + 'image-gallery-overlay*/index.html')
    .pipe(replace(
      /imgs\//g,
      `${CDN_IMGS}`
    ))
    .pipe(dest(DIST))
    .pipe(touch());
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

exports.default = series(
  copySrc,
  copyImgs,
  copyCrossFade,
  copyCustomCard,
  copyImageGalleryOverlay,
  copyIndex
);
