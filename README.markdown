# Tweet Shorturl

This is a bookmarklet that finds a canonical short url from the current webpage (or creates a new bit.ly url if none exists) and then sends that to Twitter as the basis of a new tweet.

## How it works

The bookmarklet first tries to find any one of the following: `rev='canonical'`, `rel='shortlink'`, `rel='shorturl'`, `rel='alternate short'`, or `rel='alternate shorter'`. If the page doesn't have one of the above, it then uses the [bit.ly](http://bit.ly) [api](http://code.google.com/p/bitly-api/wiki/ApiDocumentation) to create a short url for you.


## Credit where credit is due

The idea for this came from [Lachlan Hardy](http://twitter.com/lachlanhardy)'s [Tweet-Canonical](http://github.com/lachlanhardy/tweet-canonical/). 

The bulk of the code came from [Joel Watts](https://gist.github.com/jpwatts)'s [gist](https://gist.github.com/418716/cfa414ffe6c6670e18c6238bee0402e7cd2b9638). I simply swapped the prompt for the Twitter redirect.


## Installation

To install the bookmarklet, first you'll need to add your `BITLY_USERNAME` and `BITLY_API_KEY`. You can get the latter from your [bit.ly Account](http://bit.ly/a/account)

Then you'll need to paste the JS into a bookmarklet builder such as [this](http://subsimple.com/bookmarklets/jsbuilder.htm).

## Copyright

Copyright (c) 2010 [Phil Oye](http://twitter.com/philoye) under the MIT License. See LICENSE for details.
