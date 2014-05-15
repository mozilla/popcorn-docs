---
title: Wordriver
---
# Wordriver #

## Purpose ##

Displays a string of text, fading it in and out while transitioning across the height of the parent container for the duration of the instance  (duration = end - start)

## Options ##

* **start** \[Number\] - is the time \[in seconds\] that you want the Word River animation to begin
* **end** \[Number\] - is the time \[in seconds\] that you want the Word River animation to finish
* **text** \[String\] - the text you want to be displayed by Word River
* **target** \[String\] - the target div to append the text to
* **color** \[String\] - the color of the text. Can be an Hex value i.e. #FFFFFF

## Example ##

{% highlight js linenos %}
    var pop = Popcorn( "#video" );

    pop.wordriver({
      start: 1,
      end: 3,
      text: "hello",
      target: "wordriverdiv",
      color: "red"
    });
{% endhighlight %}

[Live demo of the wordriver plugin](http://jsfiddle.net/popcornjs/VDJ2S/)
