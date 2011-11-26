# Subtitle #

## Purpose ##

Displays a subtitle over the video, or in the target div

## Options ##

* Start [Number]: is the time that you want this plug-in to execute
* End [Number]: is the time that you want this plug-in to stop executing
* Target [String]: is the id of the document element that the content is appended to, this target element must exist on the DOM
* Text [String]: is the text of the subtitle you want to display.

## Example ##

    var pop = Popcorn( "#video" );

    pop.subtitle({
      start: 5,
      end: 15,
      text: "this is the first subtitle of 2011",
    });

* [jsFiddle Example](http://jsfiddle.net/popcornjs/p8Kbs/1/)
