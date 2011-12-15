---
title: playbackrate
---
# playbackrate( \[rate\] ) #

## Purpose ##

Get or set playbackrate of calling Popcorn instance

## Options ##

* `**rate**` - number. Optional parameter that will set the playbackrate if provided and return the playbackrate if not.

## Example ##

{% highlight js linenos %}
    var p = Popcorn( "#video" );

    // returns the current playback rate
    p.playbackrate();

    // set the playback rate
    p.playbackrate( 30 );
{% endhighlight %}
