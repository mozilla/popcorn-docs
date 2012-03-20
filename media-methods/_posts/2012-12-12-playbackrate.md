---
title: playbackRate
---
# playbackRate( \[rate\] ) #

## Purpose ##

Get or set playbackRate of calling Popcorn instance. Default rate is 1.
**Note:** It does not always mute the sound and negative values are not supported yet.

## Options ##

* **rate** \[Number\] - optional parameter that will set the playback rate if provided and return the playback rate if not.

## Example ##

{% highlight js linenos %}
    var p = Popcorn( "#video" );

    // returns the current playback rate
    p.playbackRate();

    // set the playback rate
    p.playbackRate( 30 );
{% endhighlight %}
