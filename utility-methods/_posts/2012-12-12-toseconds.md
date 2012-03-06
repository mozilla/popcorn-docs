---
title: Popcorn.util.toSeconds
---
# Popcorn.util.toSeconds( smpte \[, fps \] ) #

## Purpose ##

Convert a SMPTE timestamp to time in seconds

returns a floating point number

## Options ##

* **[smpte](http://en.wikipedia.org/wiki/SMPTE_timecode)** \[String\] - a string that contains a valid timestamp in the form of either HH:MM:SS.MMM or HH:MM:SS;FF. Hours and minutes are optional and will default to 0.
* **fps** - an optional number specifying the frames per second

## Examples ##

[Live demo showing how to convert from timestamp to time in seconds](http://jsfiddle.net/popcornjs/dBpLB/)
