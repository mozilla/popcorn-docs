# load() #

## Purpose ##

load() is a Popcorn instance method, defined as a passthrough accessor to the HTMLMediaElement prototype method of the same name.  The load() method allows the user to force a reload of the current video, making it play from the beginning.  The function takes no arguements. Once the video has loaded it will take its default state as it was set when the video was instantiated ( if it was muted, if autoplay was set, etc ).

## Use cases ##

* Start the video from the beginning again
* Change a video source mid way through playback

## Examples ##

* Log some data at 1 second then reload the video at 3 seconds [jsFiddle](http://jsfiddle.net/popcornjs/dTm9J/)
* Log some data at 1 second, then change the source of the video and setting it to autoplay [jsFiddle](http://jsfiddle.net/popcornjs/AuX6B/)
