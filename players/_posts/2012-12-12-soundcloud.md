---
title: soundcloud
---
# soundcloud( id, url ) #

## Purpose ##

The SoundCloud player allows the use of any SoundCloud audio tracks with the Popcorn.js framework.

The SoundCloud player plugin allows for the use of all functions and properties that it inherits from the [baseplayer](#baseplayer) ( play, pause, volume, mute, etc ).  This means that once created, your SoundCloud instance of Popcorn will work normally like any other Popcorn instance.

## Options ##

* **id** \[String\] - the id of the HTML element that the SoundCloud player will populate
* **url** \[String\] - the url of the SoundCloud audio track you wish to use

* Note - Currently SoundCloud does not support all of the events that the HTML5 media elements do, view the [full list of events](/popcorn-docs/events/) for more details

## Examples ##

{% highlight js linenos %}
    var pop = Popcorn.soundcloud( "#video", "http://soundcloud.com/lilleput/popcorn" );

    pop.footnote({
      start: 1,
      end: 5,
      text: "Works with SoundCloud!",
      target: "footnote-div"
    });

    pop.play();
{% endhighlight %}

[Live demo of the SoundCloud player](http://jsfiddle.net/popcornjs/7Ku6T/)

## Related ##

* [baseplayer](#baseplayer)
* [Popcorn Constructor](/popcorn-docs/popcorn-constructor/)
* [Vimeo](#vimeo)
* [YouTube](#youtube)
