---
title: Tagthisperson
---
# Tagthisperson #

## Purpose ##

Adds people's names to an element on the page.

## Options ##

* **start** \[Number\] - is the time i\[in seconds\] that you want this plug-in to execute
* **end** \[Number\] - is the time \[in seconds\] that you want this plug-in to stop executing
* **person** \[String\] - is the name of the person who you want to tag
* **image** \[String\] - is the url to the image of the person - optional
* **href** \[String\] - is the url to the webpage of the person - optional
* **target** \[String\] - is the id of the document element that the text needs to be attached to, this target element must exist on the DOM

## Example ##

{% highlight js linenos %}
    var pop = Popcorn( "#video" );

    pop.tagthisperson({
      start: 0,
      end: 10,
      person: "Anna Sob",
      image: "http://newshour.s3.amazonaws.com/photos%2Fspeeches%2Fguests%2FRichardNSmith_thumbnail.jpg",
      href: "http://annasob.wordpress.com",
      target: "tagdiv"
    });
{% endhighlight %}

[Live demo of the tagthisperson demo](http://jsfiddle.net/popcornjs/ya23v/)
