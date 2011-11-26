# Popcorn #

## Purpose ##

Creates and returns a new Popcorn video object instance.

All Popcorn instance methods, plugins and callbacks are chained directly from a Popcorn Instance via it's prototype — this means that the context is always the instance.

## Options ##

* **id** - the id of the video element
* **optionsObject** - an options object for providing additional options to the popcorn instance, things like frameAnimation and frameRate can be specified here as well as plugin defaults.
* returns a Popcorn instance

## Examples ##

* Create a popcorn instance [jsFiddle](http://jsfiddle.net/popcornjs/Y2uK7/)
* Showing the context within various instance methods, as well has how to create an instance [jsFiddle](http://jsfiddle.net/popcornjs/G3Csf/)
* Also showing context but with a plugin instead [jsFiddle](http://jsfiddle.net/popcornjs/GmNEY/)
