---
title: Lowerthird
---
# Lowerthird #

## Purpose ##

Displays information about a speaker over the video, or in the target div

## Options ##

* **start** \[Number\] - is the time that you want this plug-in to executei (in seconds)
* **end** \[Number\] - is the time that you want this plug-in to stop executing (in seconds)
* **target** \[String\] - is the id of the document element that the content is appended to, this target element must exist on the DOM
* **salutation** \[String\] - is the speaker's honorific, e.g.: Mr., Ms., Dr., etc.
* **name** \[String\] - is the speaker's name.
* **role** \[String\] - is information about the speaker, e.g.: Engineer.

## Example ##

{% highlight js linenos %} 
    var pop = Popcorn( "#video" );

    pop.lowerthird({
      start: 5,
      end: 15,
      salutation: "Mr",
      name: "Hyde",
      role: "Monster"
    });
{% endhighlight %}

[Live demo of the lowerthird plugin](http://jsfiddle.net/popcornjs/d5Du8/)
