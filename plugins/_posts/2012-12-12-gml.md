# GML #

## Purpose ##

Renders a GML tag inside an HTML element

## Options ##

* Start is the time that you want this plug-in to execute
* End is the time that you want this plug-in to stop executing
* Target is the id of the document element that you wish to render the grafiti in
* gmltag is the numerical reference to a gml tag via 000000book.com

## Example ##

    var pop = Popcorn( "#video" );

    pop.gml({
      start: 0,
      end: 5,
      gmltag: "29582",
      target: "gmldiv"
    });

* [jsFiddle Example](http://jsfiddle.net/popcornjs/kzwt8/)
