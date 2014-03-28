---
title: soundcloud
---
# HTMLSoundCloudAudioElement( id ) #

## Purpose ##

The SoundCloud wrapper allows the use of any SoundCloud audio tracks with the Popcorn.js framework.

## Options ##

* **id** \[String\] - the id of the HTML element that the SoundCloud wrapper will populate

* Note - Currently SoundCloud does not support all of the events that the HTML5 media elements do, view the [full list of events](/popcorn-docs/events/) for more details

## Examples ##

{% highlight js linenos %}
    var wrapper = Popcorn.HTMLSoundCloudAudioElement( "#video" );

    wrapper.src = "http://soundcloud.com/lilleput/popcorn";

    var pop = Popcorn( wrapper );

    pop.footnote({
      start: 1,
      end: 5,
      text: "Works with SoundCloud!",
      target: "footnote-div"
    });

    pop.play();
{% endhighlight %}

## Related ##

* [youtube](#youtube)
* [Popcorn Constructor](/popcorn-docs/popcorn-constructor/)
* [vimeo](#vimeo)
