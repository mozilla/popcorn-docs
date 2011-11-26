# buffered() #

## Purpose ##

buffered() is a Popcorn instance method, defined as a passthrough accessor to the HTMLMediaElement prototype property of the same name. buffered() returns a [timeranges object](http://www.w3.org/TR/html5/video.html#normalized-timeranges-object) that describes to the user how much of the video has been loaded.  The function takes no arguements.

## Options ##

* returns - [timeRanges objects](http://www.w3.org/TR/html5/video.html#normalized-timeranges-object)

## Use Cases ##

* You want to wait until a certain amount of the video has been loaded before beginning playback or allowing the user to interact with the video

## Examples ##

* Show buffered data on page load [jsFiddle](http://jsfiddle.net/popcornjs/LmeLN/)
* Play the video when more then half of the video has loaded [jsFiddle](http://jsfiddle.net/popcornjs/QRSZE/1/)
