---
title: getScript
---
# getScript #

## Purpose ##

Request remote JavaScript resources.

## Options ##

* **scriptSource** - a string of the name of the script to be loaded
* **callback** - a function to be run when the script has been loaded

## Use Case ##

Load an external script for a plugin ( take a look at many of the current Popcorn plugins )

## Examples ##

An example showing how to get a remote script, no callback being used
{% highlight js linenos %}
    //  Load in Processing.js
    Popcorn.getScript(
      "http://processingjs.org/content/download/processing-js-1.0.0/processing-1.0.0.min.js"
    );
{% endhighlight %}

---------

An example how to get a local script using Popcorn.xhr with a callback function
{% highlight js linenos %}
    Popcorn.xhr({

      url: "local-script-resource.js",
      dataType: "script",
      success: function() {
        /*
          fired when script has loaded and is ready to use
        */
      }
    });
{% endhighlight %}

---------

An example of how to get a local script using Popcorn.getScript with a callback
{% highlight js linenos %}
    Popcorn.getScript(

      "local-script-resource.js",
      function() {
        /*
          fired when script has loaded and is ready to use
        */
      }
    );
{% endhighlight %}

---------

An example of how to get a remote script using Popcorn.getScript with a callback
{% highlight js linenos %}
    Popcorn.getScript(

      "http://processingjs.org/content/download/processing-js-1.0.0/processing-1.0.0.min.js",
      function() {
        /*
          fired when script has loaded and is ready to use
        */
      }
    );
{% endhighlight %}
