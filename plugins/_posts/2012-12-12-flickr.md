# Flickr #

## Purpose ##

The Flickr plugin allows the user to hook into the popular picture hosting site and retrieve images based on user, search term, and provided dimensions.

## Options ##

* Start [String]: is the time that you want this plug-in to execute (in seconds)
* End [String]: is the time that you want this plug-in to stop executing (in seconds)
* Userid [String]: is the id of who's Flickr images you wish to show
* Tags [String]: is a mutually exclusive list of image descriptor tags
* Username is the username of who's Flickr images you wish to show using both userid and username is redundant. An api_key is required when using username
* Apikey [String]: is your own api key provided by Flickr
* Target [String]: is the id of the document element that the images are appended to, this target element must exist on the DOM
* Numberofimages [Number]: specify the number of images to retreive from flickr, defaults to 4
* Height [String]: the height of the image, defaults to '50px'
* Width [String]: the width of the image, defaults to '50px'
* Padding [String]: number of pixels between images, defaults to '5px'
* Border [String]: border size in pixels around images, defaults to '0px'

## Example ##

    var pop = Popcorn( "#video" );

    pop.flickr({
      start: 5,
      end: 15,
      userid: "35034346917@N01",
      target: "flickrdiv"
    });

* [jsFiddle Example](http://jsfiddle.net/popcornjs/grMCk/);
