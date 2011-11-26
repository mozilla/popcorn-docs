# Webpage #

## Purpose ##

Creates an iframe showing a website specified by the user

## Options ##

* Start [String]: is the time that you want this plug-in to execute
* End [String]: is the time that you want this plug-in to stop executing
* Id [String]: is the id that you want assigned to the iframe
* Target [String]: is the id of the document element that the iframe needs to be attached to, target element must exist on the DOM
* Src [String]: is the url of the website that you want the iframe to display

## Example ##

    var pop = Popcorn( "#video" );

    pop.webpage({
      id: "webpages-a",
      start: 0,
      end: 5,
      src: "http://webmademovies.org/",
      target: "webpagediv"
    });

* [jsFiddle Example](http://jsfiddle.net/popcornjs/pMmAM/)
