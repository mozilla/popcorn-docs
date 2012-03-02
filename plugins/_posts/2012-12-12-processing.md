---
title: Processing
---
# Processing #

## Purpose ##

This plugin adds a Processing.js sketch to be added to a target div or canvas.

## Options ##

* **start** \[Number\] - is the time \[in seconds\] that you want the sketch to display and start looping.
* **end** \[Number\] - is the time \[in seconds\] you want the sketch to become hidden and stop looping.
* **target** \[String\] - is the id of the div or canvas you want the target sketch to be displayed in. ( a target that is a div will have a canvas created and placed inside of it. )
* **sketch** \[String\] - specifies the filename of the Procesing code to be loaded into Processing.js
* **noLoop** \[Boolean\] - specifies whether a sketch should continue to loop when the video is paused or seeking.

## Example ##

{% highlight js linenos %}
    var pop = Popcorn( "#video" );

    pop.processing({
      start: 0,
      end: 10,
      target: "processing-div",
      sketch: "test.pjs",
      noPause: true
    });
{% endhighlight %}
