---
title: removeTrackEvent
---
# popcorn.removeTrackEvent( id ) #

## Purpose ##

`popcorn.removeTrackEvent()` removes an existing track event from the popcorn instance, via a track event's id.

## Options ##

* **id** \[String\] - id assigned to the track event you wish to remove.

## Use Cases ##

You want to remove a track event from the poporn instance.

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

    pop.removeTrackEvent( id );

    pop.example({ start: 1, id: "example-id" });

    pop.removeTrackEvent( "example-id" );

{% endhighlight %}

## Related ##

* [add](#add)
* [getLastTrackEventId](#getLastTrackEventId)
