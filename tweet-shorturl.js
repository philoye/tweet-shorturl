// javascript:(function(){var long_url=window.location.href;var canonical=(document.querySelector('[rev~="canonical"]')||document.querySelector('[rel~="shortlink"]')||document.querySelector('[rel~="shorturl"]')||document.querySelector('[rel~="alternate"][rel~="short"]')||document.querySelector('[rel~="alternate"][rel~="shorter"]'));if(canonical){window.location='http://twitter.com/home?status='+canonical.getAttribute('href');}else if(long_url.length<=24){window.location='http://twitter.com/home?status='+encodeURIComponent(long_url);}else{window.shortUrlBookmarkletCallback=function(bitly){if(bitly.status_code===200){window.location='http://twitter.com/home?status='+bitly.data.url;}else{window.location='http://twitter.com/home?status='+encodeURIComponent(long_url);}};var script=document.createElement('script');script.type='text/javascript';script.src=('http://api.bit.ly/v3/shorten'+'?longURL='+encodeURIComponent(long_url)+'&domain=j.mp'+'&format=json'+'&callback=shortUrlBookmarkletCallback'+'&login=BITLY_USERNAME'+'&apiKey=BITLY_API_KEY');document.querySelector('head').appendChild(script);}})(); 

(function() {
  var long_url  = window.location.href;
  var canonical = ( document.querySelector('[rev~="canonical"]')
                 || document.querySelector('[rel~="shortlink"]')
                 || document.querySelector('[rel~="shorturl"]')
                 || document.querySelector('[rel~="alternate"][rel~="short"]')
                 || document.querySelector('[rel~="alternate"][rel~="shorter"]')
               );

  if (canonical) {
    window.location = 'http://twitter.com/home?status=' + canonical.getAttribute('href');
  } else if (long_url.length <= 24 ) {
    window.location = 'http://twitter.com/home?status=' + encodeURIComponent(long_url);
  } else {
    window.shortUrlBookmarkletCallback = function(bitly) {
      if (bitly.status_code === 200) {
        window.location = 'http://twitter.com/home?status=' + bitly.data.url;
      } else {
        window.location = 'http://twitter.com/home?status=' + encodeURIComponent(long_url);
      }
    };
    var script  = document.createElement('script');
    script.type = 'text/javascript';
    script.src  = ( 'http://api.bit.ly/v3/shorten'
                  + '?longURL=' + encodeURIComponent(long_url)
                  + '&domain=j.mp'
                  + '&format=json'
                  + '&callback=shortUrlBookmarkletCallback'
                  + '&login=BITLY_USERNAME'
                  + '&apiKey=BITLY_API_KEY'
                );
    document.querySelector('head').appendChild(script);
  }
})();