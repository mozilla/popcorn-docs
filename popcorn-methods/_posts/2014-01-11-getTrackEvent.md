---
title: getTrackEvent
---
# popcorn.getTrackEvent( id ) #

## Purpose ##

`popcorn.getTrackEvent()` returns the track event assigned to the id parameter.

## Options ##

* **id** \[String\] - the id assigned to the desired track event.

## Use Cases ##

You want to check values stored in a track event, and have the id.

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

    // id is now a randomly assigned id
    var id = pop.getLastTrackEventId();

    var trackEvent = pop.getTrackEvent( id );

    pop.example({ start: 1, id: "example-id" });

    trackEvent = pop.getTrackEvent( "example-id" );

{% endhighlight %}

## Related ##

* [getTrackEvents](#getTrackEvents)
* [add](#add)
* [getLastTrackEventId](#getLastTrackEventId)
