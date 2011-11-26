# controls( flag ) #

## Purpose ##

controls is a Popcorn instance method, defined as a passthrough accessor to the HTMLMediaElement prototype property of the same name. If controls is active, the video will be shown with its native set of controls ( play, timebar, volume, ect ).  When controls is not active it will not show any of the controls overlaid over the video.

## Options ##

* **flag** - boolean value specifying whether to show or hide the controls

## Use Cases ##

* Autoplay the video, showing no controls
* Show controls initially, then on play, hide the controls from the user

## Examples ##

* Hide controls [jsFiddle](http://jsfiddle.net/popcornjs/z3z5w/)
* Show/hide controls every other second [jsFiddle](http://jsfiddle.net/popcornjs/e7rys/)
