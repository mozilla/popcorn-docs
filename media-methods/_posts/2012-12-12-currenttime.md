---
title: currentTime
---
# currentTime( \[time\] ) #

## Purpose ##

Set or get the `currentTime()` of a Popcorn Instances media element.

## Options ##

* **time** \[String | Number\] - number of seconds or [SMPTE](http://en.wikipedia.org/wiki/SMPTE_timecode) format string. If a **time** parameter is passed, set the media's current time to this value. If no **time** parameter, return the value of the `currentTime()` property in seconds.

## Use Case ##

* Navigate to a certain point in the video
* Figure out what time we are at in the video

## Examples ##

* [Live demo of getting the currentTime of the video as it plays](http://jsfiddle.net/popcornjs/a3TGF/)
* [Live demo of setting the currentTime and then play](http://jsfiddle.net/popcornjs/bpge3/)

## Related ##

* [duration](#duration)
* [play](#play)
* [pause](#pause)
