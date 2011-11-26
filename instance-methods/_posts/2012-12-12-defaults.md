# defaults #

## Purpose ##

Set defaults for any property of a plugin.

This allows numerous plugins of a single type to all use the same default values.  This can be done by either calling the instance method or by doing so in the popcorn constructor.

## Options ##

* **pluginName** - a string of the name of the plugin in which you want to set default values for
* **options** - is an object that contains the values that will be defaulted for the given plugin

## Use Cases ##

* Use the same default values for numerous plugin calls
* Reduce code size

## Examples ##

* Using the instance method [jsFiddle](http://jsfiddle.net/popcornjs/mMXnf/)
* Using the Popcorn constructor [jsFiddle](http://jsfiddle.net/popcornjs/HhjGv/)
