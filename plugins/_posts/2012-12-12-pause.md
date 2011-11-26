# Pause #

## Purpose ##

When this plugin is used, links on the webpage, when clicked, will pause popcorn videos that especified 'pauseOnLinkClicked' as an option

Links may cause a new page to display on a new window, or may cause a new page to display in the current window, in which case the videos won't be available anymore. It only affects anchor tags. It does not affect objects with click events that act as anchors.

## Options ##

* pauseOnLinkClicked [Boolean]: Specifies whether to have th pause on link clicked functionality turned on or off

## Example ##

    var pop = Popcorn( "#video" , {
      pauseOnLinkClicked: true
    });

* [jsFiddle Example](http://jsfiddle.net/popcornjs/CVeN6/)
