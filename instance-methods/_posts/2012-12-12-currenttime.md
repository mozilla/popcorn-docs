# currentTime( \[time\] ) #

## Purpose ##

Set or Get the Popcorn video object instance currentTime

## Options ##

* `**time**` - number of seconds or SMPTE format string. If a `time` parameter is passed, set the media's current time to this value. If no `time` parameter, return the value of the `currentTime` property in seconds.


## Use Case ##

* Navigate to a certain point in the video
* figure out what time we are at in the video

## Examples ##

* get the currentTime of the video as it plays [jsFiddle](http://jsfiddle.net/popcornjs/a3TGF/)
* set the currentTime and then play [jsFiddle](http://jsfiddle.net/popcornjs/bpge3/)
