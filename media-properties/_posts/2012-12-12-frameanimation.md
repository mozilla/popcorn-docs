---
title: frameAnimation
---
# frameAnimation #

## Purpose ##

Setting the Popcorn constructor's option object property `frameAnimation` to `true` will opt-in playback to be managed by a `requestAnimationFrame` loop, resulting in up to 60 fps playback (results may vary depending on system). This will also grant the use of the `frame` callback method in any plugins that implement it.

## Options ##

* **frameAnimation** - boolean. State whether to use `frameAnimation` or not

## Use Case ##

Firing events on a per frame level, increasing accuracy

## Examples ##

{% highlight js linenos %}
    Popcorn("#video-element-id", { frameAnimation: true })`
{% endhighlight %}

[Live demo of updating the currentTime of a video](http://jsfiddle.net/popcornjs/JVUdb/)
