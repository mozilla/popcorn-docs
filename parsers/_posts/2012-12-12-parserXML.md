# XML parser #

## Purpose ##

The XML parser allows the user to parse XML data that contains popcorn data in order to populate a popcorn instance.

The user sepcifies the the source of there XML file in a data-timeline-sources attribute on the video object.  When Popcorn is instantiated it will search each video element for a data-timeline-sources attribute and try and parse the sepcified file.

## Options ##

* **data-timeline-sources** - a media element attribute that specifies the source of the file to be parsed

## Use Case ##

* Parse a XML file of popcorn data

## Example ##

* Parses a popcorn XML file ( this examples is assuming your XML file is called data.xml ) and that you are using data-timeline-sources

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
