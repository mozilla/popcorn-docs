# Attribution #

## Purpose ##

Allows the user to add proper attribution to the various sources used on the current page.  In the most basic sense, the attribution plugin adds text to a specified area on the page.

## Options ##

* Start [Number]: is the time that you want this plug-in to execute
* End [Number]: is the time that you want this plug-in to stop executing
* Target [String]: is the id of the document element that the text needs to be attached to, this target element must exist on the DOM
* nameofwork [String]: is the title of the attribution
* NameOfWorkUrl [String]: is a url that provides more details about the attribution
* CopyrightHolder [String]: is the name of the person/institution that holds the rights to the attribution
* CopyrightHolderUrl [String]: is the url that provides more details about the copyrightholder
* license [String]: is the type of license that the work is copyrighted under
* LicenseUrl [String]: is the url that provides more details about the ticense type

## Example ##

    var pop = Popcorn( "#video" );

    pop.attribution({
      start: 0,
      end: 10,
      nameofwork: "A Shared Culture",
      copyrightholder:"Jesse Dylan",
      license: "CC-BY-N6",
      licenseurl: "http://creativecommons.org/licenses/by-nc/2.0/",
      target: "attribdiv"
    });

* [jsFiddle Example](http://jsfiddle.net/popcornjs/AykAT/)
