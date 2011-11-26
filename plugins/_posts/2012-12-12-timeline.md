# Timeline #

## Purpose ##

Adds data associated with a certain time in the video, which creates a scrolling view of each item as the video progresses

## Options ##

* Start [Number]: is the time that you want this plug-in to execute
* End [Number]: is the time that you want this plug-in to stop executing, tho for this plugin an end time may not be needed ( optional )
* Target [String]: is the id of the DOM element that you want the timeline to appear in. This element must be in the DOM
* Title [String]: is the title of the current timeline box
* Text [String]: is text is simply related text that will be displayed
* innerHTML [String]: gives the user the option to add things such as links, buttons and so on
* direction [String]: specifies whether the timeline will grow from the top or the bottom, receives input as "UP" or "DOWN"

## Example ##

    var pop = Popcorn( "#video" );

    pop.timeline({
      start: 1,
      target: "timeline",
      title: "This is a title",
      text: "this is some interesting text that goes inside",
      innerHTML: "Click here for <a href='http://www.google.ca'>Google</a>" ,
      direction: "up"
   });

* [jsFiddle Example](http://jsfiddle.net/popcornjs/yspL2/)
