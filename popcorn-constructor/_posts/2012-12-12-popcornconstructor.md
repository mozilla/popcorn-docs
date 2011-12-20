---
title: Popcorn Constructor
---
# Popcorn( callback | id, optionsObject ) #

## Purpose ##

Creates and returns a new Popcorn instance.

All Popcorn [media methods](/popcorn-docs/media-methods/), [plugins](/popcorn-docs/plugins/) and callbacks are chained directly from a Popcorn instance. The context will always be the instance itself.

## Options ##

* **id** - The id of the media element
* **callback** - A function to execute when the [DOM is ready](/popcorn-docs/utility-methods/#popcornready).
* **optionsObject** - An object to specify additional options for the popcorn instance. For example [frameAnimation](/popcorn-docs/media-properties/#frameanimation), [frameRate](/popcorn-docs/media-properties/#framerate), and [plugin defaults](/popcorn-docs/media-methods/#defaults).


## Examples ##

The following code examples show the various ways a Popcorn instance can be created.

{% highlight js linenos %}

    Popcorn( "#video-element-id" );

{% endhighlight %}

{% highlight js linenos %}

    Popcorn( "#video-element-id", {
      frameAnimation: true
    });

{% endhighlight %}

{% highlight js linenos %}

    Popcorn( "#video-element-id", {
      defaults: {
        subtitle: {
          target: "subtitle-div"
        }
      }
    });

{% endhighlight %}

{% highlight js linenos %}

    Popcorn(function() {
      alert( "The page is loaded" );
    });

{% endhighlight %}

{% highlight js linenos %}

    Popcorn(function() {
      Popcorn( "#video-element-id" );
    });

{% endhighlight %}

* [Live demo showing how to create a Popcorn instance](http://jsfiddle.net/popcornjs/Y2uK7/)
* [Live demo showing the context within various media methods, as well has how to create an instance](http://jsfiddle.net/popcornjs/G3Csf/)
* [Live demo showing the context within a plugin](http://jsfiddle.net/popcornjs/GmNEY/)
* [Live demo using Popcorn to call a function when the DOM is ready](http://jsfiddle.net/popcornjs/2eNJF/)

## Related ##

* [Baseplayer](/popcorn-docs/players/#baseplayer)
* [Vimeo](/popcorn-docs/players/#vimeo)
* [Youtube](/popcorn-docs/players/#youtube)
* [Popcorn Ready](/popcorn-docs/utility-methods/#popcornready)
