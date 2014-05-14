---
title: Googlefeed
---
# Googlefeed #

## Purpose ##

Adds a feed from a specified blog url into the target div

## Options ##

* **start** \[Number\] -  is the time that you want this plug-in to execute (in seconds)
* **end** \[Number\] - is the time that you want this plug-in to stop executing (in seconds)
* **target** \[String\] - is the id of the DOM element that you want the feed to appear in. This element must be in the DOM
* **url** \[String\] - is the url of the blog's feed you are trying to access
* **title** \[String\] - is the title of the blog you want displayed above the feed
* **orientation** \[String\] - is the orientation of the blog, accepts either Horizontal or Vertical, defaults to Vertical

## Example ##

{% highlight js linenos %}
    var pop = Popcorn( "#video" );

    pop.googlefeed({
      start: 0,
      end: 15,
      target: "feed",
      url: "http://zenit.senecac.on.ca/~chris.tyler/planet/rss20.xml",
      title: "Planet Feed",
      orientation: "Vertical"
    });
{% endhighlight %}

[Live demo of the googlefeed plugin](http://jsfiddle.net/popcornjs/rZmL8/)
