---
title: getTrackEvents
---
# popcorn.getTrackEvents() #

## Purpose ##

`popcorn.getTrackEvents()` returns an array track event objects attached to the popcorn instance.

## Use Cases ##

You need to look through all track events attached to an instance, or you need the number of track events attached to an instance.

## Examples ##

{% highlight js linenos %}

    // Create your plugin
    Popcorn.plugin( "example", {
      start: function() {}
    });

    // Create Popcorn instance
    var pop = Popcorn( "#video-element-id" );

    // create an example track event from the example plugin
    pop.example({ start: 1 });

    // trackEvents[ 0 ] is the example track event, and trackEvents.length is 1
    var trackEvents = pop.getTrackEvents();

{% endhighlight %}

## Related ##

* [getTrackEvent](#getTrackEvent)
* [add](#add)
* [getLastTrackEventId](#getLastTrackEventId)
