---
title: Baseplayer
---
# Baseplayer #

## Purpose ##

The baseplayer is used to provide the user with an empty shell which emulates the [HTML5 video element](https://developer.mozilla.org/en/DOM/HTMLVideoElement).  This allows the user to use Popcorn.js even without a media element ( video or audio ) which allows for events to be fired off just like your typical Popcorn instance.  All events, functions, and properties that Popcorn provides are extended onto the baseplayer for convenience.

## Options ##

* **id** - just like using a video or audio source, you pass along the id of the HTML element which the baseplayer will use ( in the form of "#id", where id is the id of your element )

## Use Cases ##

The baseplayer has numerous use cases, such as :

* Wanting to use popcorn without a media
* Creating a bigger global timeline in which numerous smaller popcorn instances are created from
* Used to create a new Popcorn player plugin, as all new players inherit from the baseplayer ( see [this detailed guide]() on creating a player plugin )

## Examples ##

{% highlight js linenos %}
    Popcorn.player( "baseplayer" );

    var pop = Popcorn( "elementID" );

    pop.play();

    // Add popcorn events here and other functionality
    pop.footnote({
      start: 1,
      end: 5,
      text: "Works with the baseplayer!",
      target: "footnote-div"
    });
{% endhighlight %}

[Live demo of how to use the baseplayer](http://jsfiddle.net/popcornjs/qQ672/)

## Related ##

* [Popcorn Constructor](/popcorn-docs/popcorn-constructor/)
* [Vimeo](#vimeo)
* [Youtube](#youtube)
