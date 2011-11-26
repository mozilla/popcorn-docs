# Lowerthird #

## Purpose ##

Displays information about a speaker over the video, or in the target div

## Options ##

* Start [Number]: is the time that you want this plug-in to execute
* End [Number]: is the time that you want this plug-in to stop executing
* Target [String]: is the id of the document element that the content is appended to, this target element must exist on the DOM
* salutation [String]: is the speaker's Mr. Ms. Dr. etc.
* name [String]: is the speaker's name.
* role [String]: is information about the speaker, example Engineer.

## Example ##

    var pop = Popcorn( "#video" );

    pop.lowerthird({
      start: 5,
      end: 15,
      salutation: "Mr",
      name: "Hyde",
      role: "Monster"
    });

* [jsFiddle Example](http://jsfiddle.net/popcornjs/d5Du8/)
