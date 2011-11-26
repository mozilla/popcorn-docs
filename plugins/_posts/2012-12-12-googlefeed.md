# Googlefeed #

## Purpose ##

Adds a feed from a specified blog url into the target div

## Options ##

* Start [Number]:  is the time that you want this plug-in to execute
* End [Number]: is the time that you want this plug-in to stop executing
* Target [String]: is the id of the DOM element that you want the map to appear in. This element must be in the DOM
* Url [String]: is the url of the blog's feed you are trying to access
* Title [String]: is the title of the blog you want displayed above the feed
* Orientation [String]: is the orientation of the blog, accepts either Horizontal or Vertical, defaults to Vertical

## Example ##

    var pop = Popcorn( "#video" );

    pop.googlefeed({
      start: 0,
      end: 15,
      target: "feed",
      url: "http://zenit.senecac.on.ca/~chris.tyler/planet/rss20.xml",
      title: "Planet Feed",
      orientation: "Vertical"
    });

* [jsFiddle Example](http://jsfiddle.net/popcornjs/rZmL8/)
