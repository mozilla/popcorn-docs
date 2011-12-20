---
title: data timeline sources
---
# data-timeline-sources #

## Purpose ##

Parse data-timeline-sources attribute on HTML elements.

This module uses [Popcorn's parsers](/popcorn-docs/parsers/) to parse the data inside the data-timeline-sources attribute into a Popcorn instance.

## Examples ##

The following examples showcases how the data-timeline-sources attribute can be used to automatically create Popcorn instances.

{% highlight html linenos %}
    <html>
      <head>
        <script src="popcorn-complete.js"></script>
      </head>
      <body>
        <video id="video" data-timeline-sources="data/data.json"
          controls
          width='250px'
          poster="../../test/poster.png">

          <source id='mp4'
            src="../../test/trailer.mp4"
            type='video/mp4; codecs="avc1, mp4a"'>

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
