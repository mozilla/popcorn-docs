# listen #

## Purpose ##

Bind an event handling callback to an event. Allows custom events.

Any of the follow event types may be used with .listen() : loadstart, progress, suspend, emptied, stalled, play, pause, loadedmetadata, loadeddata, waiting, playing, canplay, canplaythrough, seeking, seeked, timeupdate, ended, ratechange, durationchange, volumechange.

Listen also excepts custom events.

## Options ##

* **eventName** - the name of the event to listen for
* **callback** - the function that will get fired when the event is triggered

## Use Cases ##

* You want to perform some action when an event happens, i.e, show a googlemap when the video is paused

## Examples ##

* console.log some information when the play event is triggered [jsFiddle](http://jsfiddle.net/popcornjs/UuLsj/)
