# Code #

## Purpose ##

Allows for the ability to run arbitrary code ( JavaScript functions ) according to video timing.

## Options ##

* start [Number]: the time in seconds when the mustache template should be rendere in the target divd
* end [Number]: the time in seconds when the rendered mustache template should be removed from the target div
* onStart [function]: the function to be run when the start time is reached.
* onFrame [function]: a function to be run on each paint call (e.g., called ~60 times per second) between the start and end times.
* onEnd [function]: a function to be run when the end time is reached.

## Example ##

    var pop = Popcorn( "#video" );

    pop.code({
      start: 1,
      end: 3,
      onStart: function( options ) {
        document.getElementById( "test1" ).innerHTML = "Yes";
      },
      onEnd: function( options ) {
        document.getElementById( "test1" ).innerHTML = "No";
      }
    });

* [jsFiddle Example](http://jsfiddle.net/popcornjs/Wmskz/)
