---
title: getLastTrackEventId
---
# popcorn.getLastTrackEventId() #

## Purpose ##

`popcorn.getLastTrackEventId()` returns the id of the most recently added track event.

## Use Cases ##

You just created a track event and want to store its id with all the other track events for future update or removal.

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

    // create an example track event from the example plugin
    pop.example({ start: 1, id: "example-id" });

    // now id is "example-id"
    id = pop.getLastTrackEventId();

{% endhighlight %}

## Related ##

* [getTrackEvent](#getTrackEvent)
* [update](#update)
* [removeTrackEvent](#removeTrackEvent)
