# loop( flag ) #

controls is a Popcorn instance method, defined as a passthrough accessor to the HTMLMediaElement prototype property of the same name. When loop is set to true, it will restart the video when it finishes.  By default Popcorn videos will not loop.

## Options ##

* **flag** - boolean value specifying whether or not to loop the video

## Use Cases ##

* Continuosly play the video
* Perform different actions on each playthrough

## Examples ##

* Continuosly play [jsFiddle](http://jsfiddle.net/popcornjs/H9J4C/)
* Log something at an incrementing time each loop over the video [jsFiddle](http://jsfiddle.net/popcornjs/MAn7J/)
