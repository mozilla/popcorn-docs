# Tagthisperson #

## Purpose ##

Adds people's names to an element on the page.

## Options ##

* Start [Number]: is the time that you want this plug-in to execute
* End [Number]: is the time that you want this plug-in to stop executing
* Person [String]: is the name of the person who you want to tag
* Image [String]: is the url to the image of the person - optional
* href [String]: is the url to the webpage of the person - optional
* Target [String]: is the id of the document element that the text needs to be attached to, this target element must exist on the DOM

## Example ##

    var pop = Popcorn( "#video" );

    pop.tagthisperson({
      start: 0,
      end: 10,
      person: "Anna Sob",
      image: "http://newshour.s3.amazonaws.com/photos%2Fspeeches%2Fguests%2FRichardNSmith_thumbnail.jpg",
      href: "http://annasob.wordpress.com",
      target: "tagdiv"
    });

* [jsFiddle Example](http://jsfiddle.net/popcornjs/ya23v/)
