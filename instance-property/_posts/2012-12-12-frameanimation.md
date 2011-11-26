# frameAnimation #

## Purpose ##

Setting the Popcorn constructor's option object property frameAnimation to true allows you to opt-in your playback to be managed by a requestAnimationFrame loop, resulting in up to 60 fps playback. This will also grant the use of the frame callback method in any plugins that implement it.

## Options ##

Popcorn("#video-element-id", { frameAnimation: true })

* **frameAnimation** - boolean value stating whether to use frameAnimation or not

## Use Case ##

* Firing events on a per frame level, increasing accuracy

## Examples ##

* Update the currentTime of a video [jsFiddle](http://jsfiddle.net/popcornjs/JVUdb/)
