# Youtube #

## Purpose ##

The youtube player allows the use of any youtube video with the Popcorn.js framework.

The youtube player plugin allows for the use of all functions and properties that it inherits from the [baseplayer]() ( play, pause, volume, mute, etc ).  This means that once created, your youtube instance of Popcorn will work normally like any other Popcorn instance.

## Options ##

* **id** - the id of the HTML element that the youtube player will populate
* **url** - the url of the youtube video you wish to use
*
* Note - Things like width and height are inherited from the HTML element that the player is populating, and if are not present, default to a width of 350px and a height of 300px
* Other youtube options such as showing youtube controls, showing related links at the end and so on, are passed in via the query string that is appended to the youtube video url. Take a look at [this documentation]() for further information.

## Examples ##

    var pop = Popcorn.youtube( '#video', 'http://www.youtube.com/watch?v=9oar9glUCL0' );

    pop.footnote({
      start: 1,
      end: 5,
      text: "Works with youtube!",
      target: "footnote-div"
    });

    pop.play();

[jsFiddle example](http://jsfiddle.net/popcornjs/whvkP/)
