# Linkedin #

## Purpose ##

Places a  LinkedIn plugin inside a div ( http://developers.facebook.com/docs/plugins/ )

## Options ##

* Start [Number]: is the time that you want this plug-in to execute
* End [Number]: is the time that you want this plug-in to stop executing
* Target [String]: is the id of the document element that the plugin needs to be attached to, this target element must exist on the DOM
* Type [String]: is the name of the plugin, options are share, memberprofile, companyinsider, companyprofile, or recommendproduct
* Apikey [String]: is your own api key from obtained from https://www.linkedin.com/secure/developer
* Url [String]: is the desired url to share via LinkedIn. Defaults to the current page if no url is specified
* Counter [String]: is the position where the counter will be positioned. This is used if the type is "share" or "recommendproduct". The options are right and top (don't include this option if you do not want a counter)
* Format [String]: is the data format of the member and company profile plugins. The options are inlined, hover, and click. Defaults to inline
* Companyid [String]: must be specified if the type is "companyprofile," "companyinsider," or "recommendproduct"
* Productid [String]: must be specified if the type is "recommendproduct"

## Example ##

    var pop = Popcorn( "#video" );

    pop.linkedin({
      type: "share",
      counter: "right",
      url: "http://www.google.ca",
      target: "sharediv",
      apikey: "ZOLRI2rzQS_oaXELpPF0aksxwFFEvoxAFZRLfHjaAhcGPfOX0Ds4snkJpWwKs8gk",
      start: 1,
      end: 4
    });

* [jsFiddle Example](http://jsfiddle.net/popcornjs/xCZUB/)
