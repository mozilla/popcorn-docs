# played() #

## Purpose ##

played() is a Popcorn instance method, defined as a passthrough accessor to the HTMLMediaElement prototype property of the same name. played() allows the user to get information on how much of the video has been played so far in the form of a [timeRanges object]().  It takes no arguements

## Options ##

* returns - [timeRanges Object]()

## Use Cases ##

* Update the user on how much of the video they have watched so far
* Show content depending on how much of the video the user has watched

## Examples ##

* Show how much has been played at 1 second [jsFiddle](http://jsfiddle.net/popcornjs/uWUjJ/)
* Show how much of the video has been played as a percentage as the video is playing [jsFiddle](http://jsfiddle.net/popcornjs/LkfJL/1/)
