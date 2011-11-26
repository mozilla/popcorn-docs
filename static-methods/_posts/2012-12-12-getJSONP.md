# getJSONP #

## Purpose ##

Request remote JSONP data

## Options ##

* **scriptSource** - a string of the name of the script to be loaded
  * **callback=jsonp ( or similar )** - params are required to use with any JSONP service
* **callback** - a function to be run when the script has been loaded

## Examples ##

    Popcorn.xhr({

      url: "jsonp.json?callback=jsonp",
      dataType: "jsonp",
      success: function( data ) {
        /*
          `data` will be the parsed json object

        */
      }
    });

----------

    Popcorn.getJSONP(

      "jsonp.json?callback=jsonp",
      function( data ) {
        /*
          `data` will be the parsed json object

        */
      }
    );

----------

    Popcorn.xhr({

      url: "http://domain.com/service/?callback=jsonp",
      dataType: "jsonp",
      success: function( data ) {
        /*
          `data` will be the parsed json object

        */
      }
    });

----------

    Popcorn.getJSONP(

      "http://domain.com/service/?callback=jsonp",
      function( data ) {
        /*
          `data` will be the parsed json object

        */
      }
    );
