# toggle( pluginName ) #

## Purpose ##

toggle is used to turn on and off events of plugin type.  This provides the user with the ability to easily turn on and off events as they see fit. Something to note is that toggling events on/off does not mean that they will be hidden when toggled off.  It simply means that events will not longer be fired of that plugin type, i.e start, end, onFrame will not be fired if toggled off. toggle takes the following argument:

## Options ##

* **pluginName** - a string of the name of the plugin, i.e. footnote

## Use Cases ##

* Toggle a plugin on and off because of a user interaction
* Play the video through once without popcorn events and once with popcorn events

## Examples ##

* Button to toggle events on and off [jsFiddle](http://jsfiddle.net/popcornjs/RbVKJ/1/)
* Play video without events on first play through, then with events there after [jsFiddle](http://jsfiddle.net/popcornjs/McBEv/)
