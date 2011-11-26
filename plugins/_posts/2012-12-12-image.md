# Image #

## Purpose ##

Show an image inside a given element on the page.

## Options ##

* Start [Number]: is the time that you want this plug-in to execute
* End [Number]: is the time that you want this plug-in to stop executing
* href [String]: is the url of the destination of a link - optional
* Target [String]: is the id of the document element that the iframe needs to be attached to, this target element must exist on the DOM
* Src [String]: is the url of the image that you want to display
* text [String]: is the overlayed text on the image - optional

## Example ##

    var pop = Popcorn( "#video" );

    pop.image({
      // seconds
      start: 5,
      // seconds
      end: 15,
      href: "http://www.drumbeat.org/",
      src: "https://www.drumbeat.org/media//images/drumbeat-logo-splash.png",
      text: "DRUMBEAT",
      target: "imagediv"
    });

* [jsFiddle Example](http://jsfiddle.net/popcornjs/8ZFzH/1/)
