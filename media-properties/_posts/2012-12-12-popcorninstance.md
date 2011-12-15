---
title: Popcorn Instance
---
# Popcorn( id, optionsObject ) #

## Purpose ##

Creates and returns a new Popcorn instance.

All Popcorn instance methods, plugins and callbacks are chained directly from a Popcorn instance, delegated via its prototype. The context will always be the instance itself.

returns a Popcorn instance

## Options ##

* **id** - the id of the video element
* **optionsObject** - an options object for providing additional options to the popcorn instance, things like frameAnimation and frameRate can be specified here as well as plugin defaults.

## Examples ##

{% highlight js linenos %}
    Popcorn("#video-element-id")
{% endhighlight %}

{% highlight js linenos %}
    Popcorn("#video-element-id", { frameAnimation: true })
{% endhighlight %}

{% highlight js linenos %}
    Popcorn("#video-element-id", { /* defaults */ })
{% endhighlight %}

* [Live demo of how to create a popcorn instance](http://jsfiddle.net/popcornjs/Y2uK7/)
* [Live demo showing the context within various instance methods, as well has how to create an instance](http://jsfiddle.net/popcornjs/G3Csf/)
* [Live demo of how to also show context but with a plugin instead](http://jsfiddle.net/popcornjs/GmNEY/)
