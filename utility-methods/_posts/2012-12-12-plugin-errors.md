---
title: Popcorn.plugin.errors
---
# Popcorn.plugin.errors #

## Purpose ##

Popcorn.plugin.errors is an array object that contains errors thrown from plugins when Popcorn is not in debug mode.
Each error object in Popcorn.plugin.errors will look like:
{% highlight js %}
    {
      plugin: pluginName,
      thrown: originalErrorObject,
      source: pluginFunction-toString
    }
{% endhighlight %}

## Options ##

* **Popcorn.plugin.errors** \[Array Object\] - Stores suppressed errors from plugins

## Use Case ##

* Inspection of this object can help a developer solve problems with their Popcorn projects.
* The redirection of errors to Popcorn.plugin.errors makes sure that execution of the entire project continues even in the case of a single plugin failing during runtime.

## Examples ##

{% highlight js linenos %}
    // Debug mode is off by default

    // Create a plugin that will throw an error when it's start function runs
    Popcorn.plugin( "foo", {
      start: function() {
        throw new Error();
      }
    });

    // Create Popcorn instance
    var pop = Popcorn( "#video-element-id" );

    // set up "foo" event
    pop.foo({ start: 1 });

    // The error will be caught by Popcorn.plugin.errors
    pop.listen( "error", function( e ) {
      // 'e' is Popcorn.plugin.errors, which can be accessed outside the "error" event callback.
      console.log( e );
    });

    pop.play();

{% endhighlight %}

* [Live Demo of using Popcorn.plugin.errors](http://jsfiddle.net/popcornjs/kVgVH/2/)

## Related ##

* [Popcorn.plugin.debug](#Popcorn.plugin.debug)
* [listen](/popcorn-docs/media-methods/#listen)
* [Popcorn.plugin](#Popcorn.plugin)