# data-timeline-sources #

## Purpose ##

The data-timeline-sources module adds functionality to the Popcorn.js core to parse custom data-timeline-sources attributes on HTML elements.

This is primarily used in association with Popcorn's parsers and allows the user to specify the source of the data to be parsed on the video element inside the data-timeline-sources attribute.  This allows popcorn to create a custom instance based on the data in data-timeline-sources.

## Examples ##

    <html>
      <head>
        <script src="popcorn-complete.js"></script>
      </head>
      <body>
        <video id="video" data-timeline-sources="data/data.json"
          controls
          width= '250px'
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
