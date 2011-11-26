# Lastfm #

## Purpose ##

Appends information about a LastFM artist to an element on the page.

## Options ##

* Start [Number]: is the time that you want this plug-in to execute
* End [Number]: is the time that you want this plug-in to stop executing
* Artist [String]: is the name of who's LastFM information you wish to show
* Target [String]: is the id of the document element that the images are appended to, this target element must exist on the DOM
* ApiKey [String]: is the API key registered with LastFM for use with their API

## Example ##

    var pop = Popcorn( "#video" );

    pop.lastfm({
      start: 5,
      end: 15,
      artist: "yacht",
      target: "lastfmdiv",
      apikey: "30ac38340e8be75f9268727cb4526b3d"
    });

* [jsFiddle Example](http://jsfiddle.net/popcornjs/XVbup/)
