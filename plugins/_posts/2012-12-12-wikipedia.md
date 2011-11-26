# Wikipedia #

## Purpose ##

Displays a wikipedia aricle in the target specified by the user by using new DOM element instead overwriting them

## Options ##

* Start [Number]: is the time that you want this plug-in to execute
* End [Number]: is the time that you want this plug-in to stop executing
* Target [String]: is the id of the document element that the text from the article needs to be to, this target element must exist on the DOM
* Lang [String]: (optional, defaults to english) is the language in which the article is in.
* Src [String]: is the url of the article
* Title [String]: (optional) is the title of the article
* numberofwords [Number]: (optional, defaults to 200) is  the number of words you want displaid.

## Example ##

    var pop = Popcorn( "#video" );

    pop.wikipedia({
      start: 0,
      end: 10,
      src: "http://en.wikipedia.org/wiki/Cape_Town",
      title: "this is an article",
      target: "wikidiv"
    });

* [jsFiddle Example](http://jsfiddle.net/popcornjs/5q7QS/)
