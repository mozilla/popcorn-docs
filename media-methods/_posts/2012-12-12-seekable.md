# seekable() #

## Purpose ##

seekable() is a Popcorn instance method, defined as a passthrough accessor to the HTMLMediaElement prototype property of the same name. seekable() takes no arguments and provides the user with information on how much of the media they can currently seek through.

## Options ##

* returns - [TimeRanges object]()

## Use Cases ##

* Dont show the timeline until the user is able to seek through a certain amount of the video

## Examples ##

* Hide timeline until the user can seek through over half of the video [jsFiddle](http://jsfiddle.net/popcornjs/27g3j/1/)
