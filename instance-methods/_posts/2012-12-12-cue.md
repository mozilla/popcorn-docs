# cue( time, callback ) #

## Purpose ##

cue is an alias to exec(), meaning it provides the same functionality but is simply accessed through a seperate function name.  Cue was created with film makers in mind by using a familiar keyword in order to make developing Popcorn.js projects simpler.

## Options ##

* **time** - the time in which the cue will be fired at
* **callback** - a callback function that will be executed at a given **time** in a cue

## Use Cases ##

* Perform an action at some point in the video
* Unique functionality that is not big enough to warrant a plugin

## Example ##

* Log data at points in the video [jsFiddle](http://jsfiddle.net/popcornjs/a38mA/)
