# foreach #

## Purpose ##

Iterates over either an object or an array, passing each item or property to the callback.

## Options ##

* **item** - an object or array that will be parsed
* **callback** -  a callback function with the following parameters:
  * **value** - the value of the current object at the keyed by **key**
  * **key** - the position in the object or value where the **value** is stored
  * **item** - our original object or array
* returns an object or array

## Example ##

* iterate over each item in an object and console.log its key and value [jsFiddle](http://jsfiddle.net/popcornjs/4EE8E/)
