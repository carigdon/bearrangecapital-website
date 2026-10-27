// Bear Range Capital — small page helpers.

// Current year in the footer.
document.querySelectorAll('[data-year]').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// The email address is not written in the HTML, so bots that scrape pages
// for addresses don't find it. It is put together here, in the browser,
// and turned into a normal clickable link.
document.querySelectorAll('[data-email]').forEach(function (el) {
  var address = ['info', 'bearrangecapital.com'].join('@');
  el.textContent = address;
  el.setAttribute('href', 'mai' + 'lto:' + address);
});
