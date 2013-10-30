---
title: JSON parser
---
# parseJSON( fileName, callback )"#

## Purpose ##

The [JSON](http://www.json.org/) parser will parse valid JSON into Popcorn events.

The user can also specify the the source of their json file using a [data-timeline-sources](/popcorn-docs/modules/#data-timeline-sources) attribute on the media tag.
When Popcorn is instantiated, it will search each media element for a data-timeline-sources attribute and try and parse the specified file. NOTE: this requires the use of the [data-timeline-sources module](/popcorn-docs/modules/#data-timeline-sources)

## Options ##

* **fileName** \[String\] - A path to the JSON file.
* **callBack** \[Function\] - An optional function to be executed when the JSON data has completed parsing.

## Use Case ##

Parse a JSON file containing popcorn data

## Example ##

Parses a JSON file:

{% highlight html linenos %}
    <html>
      <head>
        <script src="popcorn-complete.js"></script>
         <script type="text/javascript">

         document.addEventListener('DOMContentLoaded', function () {

            var p = Popcorn("#video");

            p.parseJSON( "data/data.json", function() {
            alert( "JSON Parsed Successfully" );
            });

         }, false);

        </script>
      </head>
      <body>
        <video id="video"
          controls
          width='250px'
          poster="../../test/poster.png">

          <source id='mp4'
            src="../../test/trailer.mp4" type='video/mp4; codecs="avc1, mp4a"'>

          <source id='ogv'
            src="../../test/trailer.ogv"
            type='video/ogg; codecs="theora, vorbis"'>

          <p>Your user agent does not support the HTML5 Video element.</p>

        </video>
        <div id="footnote-container"></div>
        <div id="map-container"></div>
        <div id="iframe-container"></div>
      </body>
    </html>
{% endhighlight %}
