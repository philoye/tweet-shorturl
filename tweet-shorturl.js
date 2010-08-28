javascript:
(function() {
  var l = (   document.querySelector('[rev~="canonical"]')
           || document.querySelector('[rel~="shortlink"]')
           || document.querySelector('[rel~="shorturl"]')
           || document.querySelector('[rel~="alternate"][rel~="short"]')
           || document.querySelector('[rel~="alternate"][rel~="shorter"]')
         );
  if (l) {
    window.location = 'http://twitter.com/home?status=' + l.getAttribute('href');
  } else {
    window.shortUrlBookmarkletCallback = function(bitly) {
      if (bitly.status_code === 200) {
        window.location = 'http://twitter.com/home?status=' + bitly.data.url;
      } else {
        window.location = 'http://twitter.com/home?status=' + encodeURIComponent(window.location.href);
      }
    };
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = (   'http://api.bit.ly/v3/shorten'
              + '?longURL=' + encodeURIComponent(window.location.href)
              + '&domain=j.mp'
              + '&format=json'
              + '&callback=shortUrlBookmarkletCallback'
              + '&login=BITLY_USERNAME'
              + '&apiKey=BITLY_API_KEY'
            );
    document.querySelector('head').appendChild(s);
  }
})();