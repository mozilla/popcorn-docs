# readyState() #

## Purpose ##

readyState() is a Popcorn instance method, defined as a passthrough accessor to the HTMLMediaElement prototype property of the same name. readystate returns a value from 0 - 4 describing at which state in loading the video is at. readystate() takes no arguements.

## Options ##

* returns:
  * 0 ( HAVE_NOTHING ) - no information regarding the media source is available
  * 1 ( HAVE_METADATA ) - duration and dimensions of the video are available
  * 2 ( HAVE_CURRENT_DATA ) - enough data for the immediate playback of the current position
  * 3 ( HAVE_FUTURE_DATA ) - same as readyState 2 but the the video can seek forwards at least a small bit before returning to readyState 2
  * 4 ( HAVE_ENOUGH_DATA ) = same as readyState 3 but the user agent has estimated that data is being fetched at a rate that it will not stall playback before the end of the video

See the [HTML5 Video spec for readyStates](http://www.w3.org/TR/html5/video.html#dom-media-have_nothing) for more details

## Use Cases ##

* Perform tasks as soon as data is available by checking readyStates

## Examples ##

* Basic example showcasing readyStates [jsFiddle](http://jsfiddle.net/popcornjs/Qj8xX/)
