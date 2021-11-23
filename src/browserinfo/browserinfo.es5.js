window.onload = function () {
  var ua = detect.parse(navigator.userAgent);
  var hasServiceWorker = 'serviceWorker' in navigator;
  var hasNotification = 'Notification' in window;
  var hasIndexedDB = !!(window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB);
  var hasLocalStorage = 'localStorage' in window;
  var hasSessionStorage = 'sessionStorage' in window;
  var hasGeolocation = 'geolocation' in navigator;
  var language = navigator.language;
  var platform = navigator.platform;
  var vendor = navigator.vendor;
  var reportStr = '';
  reportStr += 'Browser . . .\n';
  reportStr += "  Family:   ".concat(ua.browser.family, "\n");
  reportStr += "  Name:     ".concat(ua.browser.name, "\n");
  reportStr += "  Version:  ".concat(ua.browser.major + '.' + ua.browser.minor + (ua.browser.patch ? '.' + ua.browser.patch : ''), "\n");

  if (vendor) {
    reportStr += "  Vendor:   ".concat(vendor, "\n");
  }

  reportStr += "  Language: ".concat(language ? '"' + language + '"' : 'NONE :-(', "\n");
  reportStr += '\nDevice . . .\n';
  reportStr += "  Family:       ".concat(ua.device.family, "\n");
  reportStr += "  Type:         ".concat(ua.device.type, "\n");
  reportStr += "  Platform:     ".concat(platform, "\n");
  reportStr += "  Manufacturer: ".concat(ua.device.manufacturer, "\n");
  return new Promise(function (resolve) {
    var mds = navigator.mediaDevices;

    if (!mds || !mds.enumerateDevices) {
      resolve(null);
    }

    resolve(mds.enumerateDevices());
  }).then(function (devices) {
    if (!devices || !devices.length) {
      return;
    }

    devices.forEach(function (device) {
      return reportStr += '  Media device: ' + device.kind + '\n';
    });
  }).then(function () {
    reportStr += '\nOS . . .\n';
    reportStr += "  Family:  ".concat(ua.os.family, "\n");
    reportStr += "  Version: ".concat(ua.os.major + '.' + ua.os.minor + (ua.os.patch ? '.' + ua.os.patch : ''), "\n\n");
    reportStr += 'Services . . .\n';
    reportStr += "  Cookies:         ".concat(navigator.cookieEnabled ? 'YES' : 'NO', "\n");
    reportStr += "  Geolocation:     ".concat(hasGeolocation ? 'YES' : 'NO :-(', "\n");
    reportStr += "  Local Storage:   ".concat(hasLocalStorage ? 'YES' : 'NO :-(', "\n");
    reportStr += "  Session Storage: ".concat(hasSessionStorage ? 'YES' : 'NO :-(', "\n");
    reportStr += "  IndexedDB:       ".concat(hasIndexedDB ? 'YES' : 'NO :-(', "\n");
    reportStr += "  Service Worker:  ".concat(hasServiceWorker ? 'YES' : 'NO :-(', "\n");
    reportStr += "  Notifications:   ".concat(hasNotification ? 'YES' : 'NO :-(', "\n");
    document.getElementById('pre-info').innerText = reportStr;
  });
};
