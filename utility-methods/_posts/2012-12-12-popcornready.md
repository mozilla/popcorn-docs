---
title: Popcorn Ready 
---
# Popcorn( callback ) #

## Purpose ##

An optional way to use Popcorn's constructor.  Instead of passing in an id as a parameter, a callback function is passed in that will be called when the DOM is ready.

## Options ##

* **callback** \[Function\] - function.  A function that will be called when the DOM is ready 

## Use Case ##

* Execute a block of code once the DOM has loaded 

## Examples ##

{% highlight js linenos %}
    Popcorn(function() {
      
      var popcorn = Popcorn( "#video" );
    });
{% endhighlight %}

[Live demo of the using Popcorn to call a callback function when the DOM is ready](http://jsfiddle.net/popcornjs/2eNJF/)

## Related ##

[Popcorn Constructor](/popcorn-docs/popcorn-constructor/)
