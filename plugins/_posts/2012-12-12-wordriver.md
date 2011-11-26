# Wordriver #

## Purpose ##

Displays a string of text, fading it in and out while transitioning across the height of the parent container for the duration of the instance  (duration = end - start)

## Options ##

* start [Number]: when to begin the Word River animation
* end [Number]: when to finish the Word River animation
* text [String]: the text you want to be displayed by Word River
* target [String]: the target div to append the text to
* color [String]: the color of the text. (can be Hex value i.e. #FFFFFF )

## Example ##

    var pop = Popcorn( "#video" );

    pop.wordriver({
      start: 1,
      end: 3,
      text: "hello",
      target: "wordriverdiv",
      color: "red"
    });

* [jsFiddle Example](http://jsfiddle.net/popcornjs/VDJ2S/)
