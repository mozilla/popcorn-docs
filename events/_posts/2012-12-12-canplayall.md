---
title: canplayall
---
# canplayall #

## Purpose ##

`"canplayall"` is triggered by Popcorn the first time `"canplaythrough"` is fired for a media element. `"canplayall"` is to be used with the `on` and `off` instance methods.

For example:
* `popcornInstance.on( "canplayall", callbackFunction );`
* `popcornInstance.off( "canplayall", callbackFunction );`

## Use Cases ##

`"canplayall"` is useful for determining the point at which a media element is ready to have its `"currentTime"` value changed.

## Examples ##

[Live demo using canplayall](http://jsfiddle.net/popcornjs/PTTrq/)

## Related ##

[Media Events](#media-events)
