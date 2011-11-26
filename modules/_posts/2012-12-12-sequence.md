# Sequence #

## Purpose ##

Create video clip sequences that playback seamlessly

## Options ##

sequence( containerId, sourcesArray )

* **containerId** - the id of the HTML element in which the videos will populate
* **sourcesArray - an array of objects, which each contain the following:
  ** **src** - path to your media source file
  ** **in** - start time for this particular media
  ** **out** - end time for this particular media

the sequencer also provides the following methods:

* **eq( index )** - return a popcorn object for the given object from the sourcesArray
  ** **index** - the position in the sourcesArray to get the object from
* **play()** - plays the sequence
* **exec( time, callback )** - executes a function at a given time in the sequence
  ** **time** - the time in the sequence in which **callback** will execute
  ** **callback** - the function that we will execute
* **listen( eventName, callback )** - listen for an event and fire a callback when that event is triggered
  **eventName** - the name of the event to listen for i.e. play, pause, timeupdate, canplayall, etc
  **callback** - the function to run when the event has been fired

## Examples ##

    var sequence = Popcorn.sequence(
                  "container-id",
                  [
                    {
                      src: "assets/snowdriving.ogv",
                      in: 0,
                      out: 5
                    },
                    {
                      src: "assets/snowdriving.ogv",
                      in: 7,
                      out: 10
                    },
                    {
                      src: "assets/snowdriving.ogv",
                      in: 3,
                      out: 6
                    }
                  ]);

[jsFiddle Example](http://jsfiddle.net/jmTgD/1/)
