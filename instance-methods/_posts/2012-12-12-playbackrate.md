# playbackrate #

## Purpose ##

Get/set the Popcorn video object instance playbackRate

## Options ##

* **rate** - an optional parameter that if it exists will set the playback rate, and if it does not, will return the playback rate

## Example ##

    var p = Popcorn( "#video" );

    // returns the current playback rate
    p.playbackrate();

    // set the playback rate
    p.playbackrate( 30 );

