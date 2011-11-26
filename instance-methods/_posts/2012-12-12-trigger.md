# Trigger #

## Purpose ##

Trigger an event; optionally pass an object of data through to the event handling callback. Allows custom events.

Any of the follow event types may be used with .trigger() : loadstart, progress, suspend, emptied, stalled, play, pause, loadedmetadata, loadeddata, waiting, playing, canplay, canplaythrough, seeking, seeked, timeupdate, ended, ratechange, durationchange, volumechange.

Trigger also accepts custom events.

## Options ##

* **eventName** - the name of the event to be triggered
* **dataObject** - optional data object

## Use Cases ##

* Trigger an event to be fired when something happens, i.e., the video reaches halfway done, so trigger custom event "halfdone" which is listened for somewhere else

## Examples ##

* Trigger play [jsFiddle](http://jsfiddle.net/popcornjs/r8wVe/)
* When half of the video has loaded, pass along a data object and log some data [jsFiddle](http://jsfiddle.net/popcornjs/GKkQx/)
