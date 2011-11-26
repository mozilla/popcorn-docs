# OpenMap #

## Purpose ##

Adds an OpenLayers map and open map tiles (OpenStreetMap [default], NASA WorldWind, or USGS Topographic)

## Options ##

* Start: [Number]:  is the time that you want this plug-in to execute
* End [Number]: is the time that you want this plug-in to stop executing
* Target [String]: is the id of the DOM element that you want the map to appear in. This element must be in the DOM
* Type [String]: either: ROADMAP (OpenStreetMap), SATELLITE (NASA WorldWind / LandSat), or TERRAIN (USGS).  ROADMAP/OpenStreetMap is the default.
* Zoom [String]: defaults to 2
* Lat and Lng [String]: are the coordinates of the map if location is not named
* Location [String]: is a name of a place to center the map, geocoded to coordinates using TinyGeocoder.com
** Markers [Array] is an array of map marker objects, with the following properties:
** Icon [String]: is the URL of a map marker image
** Size [Number]: is the radius in pixels of the scaled marker image (default is 14)
** Text [String]: is the HTML content of the map marker -- if your popcorn instance is named 'popped', use <script>popped.currentTime(10);</script> to control the video
** Lat and Lng [String]: are coordinates of the map marker if location is not specified
** Location [String]: is a name of a place for the map marker, geocoded to coordinates using TinyGeocoder.com
*
* Note: using location requires extra loading time, also not specifying both lat/lng and location will cause a JavaScript error.

## Example ##

    var pop = Popcorn( "#video" );

    pop.openmap( {
      start: 0,
      end: 20,
      type: "ROADMAP",
      target: "map",
      lat: 43.665429,
      lng: -79.403323,
      zoom: "10"
    });

* [jsFiddle Example](http://jsfiddle.net/popcornjs/NKtvy/)
