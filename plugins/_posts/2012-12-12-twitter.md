# Twitter #

## Purpose ##

Appends a Twitter widget to an element on the page.

## Options ##

* Start [Number]: is the time that you want this plug-in to execute
* End [Number]: is the time that you want this plug-in to stop executing
* Src [String]: is the hash tag or twitter user to get tweets from
* Target [String]: is the id of the document element that the images are appended to, this target element must exist on the DOM
* Height [Number]: is the height of the widget, defaults to 200
* Width [Number]: is the width of the widget, defaults to 250

## Example ##

    var pop = Popcorn( "#video" );

    pop.twitter({
      start: 5,
      end: 15,
      title: "Steve Song",
      src: "@stevesong",
      target: "twitterdiv",
    });

* [jsFiddle Example](http://jsfiddle.net/popcornjs/GhD62/)
