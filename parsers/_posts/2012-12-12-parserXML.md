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
