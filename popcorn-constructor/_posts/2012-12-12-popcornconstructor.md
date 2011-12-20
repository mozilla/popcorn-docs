---
title: Popcorn Constructor 
---
# Popcorn( callback | id, optionsObject ) #

## Purpose ##

Creates and returns a new Popcorn instance.

All Popcorn [instance methods](/popcorn-docs/media-methods/), [plugins](/popcorn-docs/plugins/) and callbacks are chained directly from a Popcorn instance, delegated via its prototype. The context will always be the instance itself.

returns a Popcorn instance

## Options ##

* **id** \[String\] - the id of the video element
* **callback** \[Function\] - instead of specifying an id, Popcorn's constructor can also be used to call a callback function when the DOM is ready ( [more information here](/popcorn-docs/utility-methods/#popcornready) )
* **optionsObject** \[Object\] - an options object for providing additional options to the popcorn instance, things like [frameAnimation](/popcorn-docs/media-properties/#frameanimation) and [frameRate](/popcorn-docs/media-properties/#framerate) can be specified here as well as [plugin defaults](/popcorn-docs/media-methods/#defaults).

## Examples ##

The following code examples show the various ways a Popcorn instance can be created

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
      framerate: number
    });

{% endhighlight %}

{% highlight js linenos %}

    Popcorn( "#video-element-id", {
      /* defaults */
    });

{% endhighlight %}

{% highlight js linenos %}

    Popcorn(function() {
      /* code to execute on DOM ready */
    });

{% endhighlight %}

* [Live demo of how to create a popcorn instance](http://jsfiddle.net/popcornjs/Y2uK7/)
* [Live demo showing the context within various instance methods, as well has how to create an instance](http://jsfiddle.net/popcornjs/G3Csf/)
* [Live demo of how to also show context but with a plugin instead](http://jsfiddle.net/popcornjs/GmNEY/)
* [Live demo of the using Popcorn to call a callback function when the DOM is ready](http://jsfiddle.net/popcornjs/2eNJF/)

## Related ##

* [Baseplayer](/popcorn-docs/players/#baseplayer)
* [Vimeo](/popcorn-docs/players/#vimeo)
* [Youtube](/popcorn-docs/players/#youtube)
* [Popcorn Ready](/popcorn-docs/utility-methods/#popcornready)
