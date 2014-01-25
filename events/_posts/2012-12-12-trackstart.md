---
title: trackstart
---
# trackstart #

## Purpose ##

trackstart is triggered by Popcorn when any instance of a plugin has its `start` method invoked. To be used with the `on` and `off` methods.

For example:
* `popcornInstance.on( "trackstart", callbackFunction )`
* `popcornInstance.off( "trackstart", callbackFunction )`

## Use Cases ##

Trigger a visual cue ( such as a transition ) whenever a plugin starts.

## Examples ##

[Live demo using trackstart](http://jsfiddle.net/popcornjs/Ukkbn/)

## Related ##

[trackend](#trackend)
