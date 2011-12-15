---
title: data timeline sources
---
# data-timeline-sources #

## Purpose ##

The data-timeline-sources module adds functionality to the Popcorn.js core to parse custom data-timeline-sources attributes on HTML elements.

This is primarily used in association with Popcorn's parsers and allows the user to specify the source of the data to be parsed on the video element inside the data-timeline-sources attribute.  This allows popcorn to create a custom instance based on the data in data-timeline-sources.

## Examples ##

    &lt;html&gt;
      &lt;head&gt;
        &lt;script src="popcorn-complete.js"&gt;&lt;/script&gt;
      &lt;/head&gt;
      &lt;body&gt;
        &lt;video id="video" data-timeline-sources="data/data.json"
          controls
          width= '250px'
          poster="../../test/poster.png"&gt;

          &lt;source id='mp4'
            src="../../test/trailer.mp4"
            type='video/mp4; codecs="avc1, mp4a"'&gt;

          &lt;source id='ogv'
            src="../../test/trailer.ogv"
            type='video/ogg; codecs="theora, vorbis"'&gt;

          &lt;p&gt;Your user agent does not support the HTML5 Video element.&lt;/p&gt;

        &lt;/video&gt;
        &lt;div id="footnote-container"&gt;&lt;/div&gt;
        &lt;div id="map-container"&gt;&lt;/div&gt;
        &lt;div id="iframe-container"&gt;&lt;/div&gt;
      &lt;/body&gt;
   &lt;/html&gt;
