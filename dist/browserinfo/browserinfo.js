window.onload = function () {
  const ua = detect.parse(navigator.userAgent);
  const hasServiceWorker = ('serviceWorker' in navigator);
  const hasNotification = ('Notification' in window);
  const hasIndexedDB = !!(window.indexedDB || window.mozIndexedDB ||
    window.webkitIndexedDB || window.msIndexedDB);
  const hasLocalStorage = ('localStorage' in window);
  const hasSessionStorage = ('sessionStorage' in window);
  const hasGeolocation = ('geolocation' in navigator);
  const language = navigator.language;
  const platform = navigator.platform;
  const vendor = navigator.vendor;

  let reportStr = '';
  reportStr += 'Browser . . .\n';
  reportStr += `  Family:   ${ua.browser.family}\n`;
  reportStr += `  Name:     ${ua.browser.name}\n`;
  reportStr += `  Version:  ${
    ua.browser.major + '.' + ua.browser.minor +
    (ua.browser.patch ? ('.' + ua.browser.patch) : '')
  }\n`;
  if (vendor) {
    reportStr += `  Vendor:   ${vendor}\n`;
  }
  reportStr += `  Language: ${
    language ? ('"' + language + '"') : 'NONE :-('
  }\n`;

  reportStr += '\nDevice . . .\n';
  reportStr += `  Family:       ${ua.device.family}\n`;
  reportStr += `  Type:         ${ua.device.type}\n`;
  reportStr += `  Platform:     ${platform}\n`;
  reportStr += `  Manufacturer: ${ua.device.manufacturer}\n`;

  return new Promise((resolve) => {
    const mds = navigator.mediaDevices;
    if (!mds || !mds.enumerateDevices) { resolve(null); }
    resolve(mds.enumerateDevices());
  })
    .then(devices => {
      if (!devices || !devices.length) { return; }
      devices.forEach(device =>
        reportStr += '  Media device: ' + device.kind + '\n');
    })
    .then(() => {
      reportStr += '\nOS . . .\n';
      reportStr += `  Family:  ${ua.os.family}\n`;
      reportStr += `  Version: ${
        ua.os.major + '.' + ua.os.minor +
        (ua.os.patch ? ('.' + ua.os.patch) : '')
      }\n\n`;

      reportStr += 'Services . . .\n';
      reportStr += `  Cookies:         ${
        navigator.cookieEnabled ? 'YES' : 'NO'
      }\n`;
      reportStr += `  Geolocation:     ${
        hasGeolocation ? 'YES' : 'NO :-('
      }\n`;
      reportStr += `  Local Storage:   ${
        hasLocalStorage ? 'YES' : 'NO :-('
      }\n`;
      reportStr += `  Session Storage: ${
        hasSessionStorage ? 'YES' : 'NO :-('
      }\n`;
      reportStr += `  IndexedDB:       ${
        hasIndexedDB ? 'YES' : 'NO :-('
      }\n`;
      reportStr += `  Service Worker:  ${
        hasServiceWorker ? 'YES' : 'NO :-('
      }\n`;
      reportStr += `  Notifications:   ${
        hasNotification ? 'YES' : 'NO :-('
      }\n`;
      document.getElementById('pre-info').innerText = reportStr;
    });
};
