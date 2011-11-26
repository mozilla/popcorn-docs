# compose( name, definitionObject, manifest ) #

## Purpose ##

compose, which is also known as effects, works very similar to a traditional Popcorn.js plugin.  We create start and end functions as we would in a typical plugin and add an appropriate effect that will be triggered in each block.  Typically this means add an effect on start and remove it on end, but is in no way limited to this.  Compose creates the huge potential for css transitions between Popcorn events and really adds another depth to the users web made movie experience. compose is not limited to effects tho, and can be used for many other things as well.  Keep in mind that plugins events will be fired first and then any composed events will be fired after.

## Options ##

* **name** - a string of the given name for the compose plugin
* **definitionObject** -  is an object literal containing typical plugin methods ( setup, start, end ) where the compose logic will live
* **manifest** - an optional manifest can be included

## Use Cases ##

* You want a unique effect to be displayed at alongside an already existing plugin
* Create transitions

## Examples ##

* Create a simple compose plugin to log data [jsFidlle](http://jsfiddle.net/popcornjs/q4rWE/)
* Simple css compose effect [jsFiddle](http://jsfiddle.net/popcornjs/jHL9m/)
