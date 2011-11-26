# Vimeo #

## Purpose ##

The vimeo player allows the use of any vimeo video with the Popcorn.js framework.

The vimeo player plugin allows for the use of all functions and properties that it inherits from the [baseplayer]() ( play, pause, volume, mute, etc ).  This means that once created, your vimeo instance of Popcorn will work normally like any other Popcorn instance.

## Options ##

* **id** - the id of the HTML element that the youtube player will populate
* **url** - the url of the vimeo video you wish to use
*
* Note - Things like width and height are inherited from the HTML element that the player is populating, and if are not present, default to a width of 350px and a height of 300px

## Examples ##

    var pop = Popcorn.vimeo( "#video", "vimeoURL" );

    pop.footnote({
      start: 1,
      end: 5,
      text: "Works with vimeo!",
      target: "footnote-div"
    });

    pop.play();

// wont work until after 1.0 lands
[jsFiddle example](http://jsfiddle.net/popcornjs/gBEek/)
