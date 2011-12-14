# parser #

## Purpose ##

* Used to create a new Popcorn.js parser

## Options ##

* **parserName** - will be the name for your newly created parser.  Will also be the name of the instance method in which your parser will be accessed through.
* **fn** - function that will get run in order to parse the **data** being passed in
  * **data** - the passed in data to be parsed

## Example ##

    Popcorn.parser( "parseJSON", function( data ) {

        // declare needed variables
        var retObj = {
              title: "",
              remote: "",
              data: []
            },
            manifestData = {}, 
            dataObj = data;
    
        Popcorn.forEach( dataObj.data, function ( obj, key ) {
          retObj.data.push( obj );
        });

        return retObj;
      });

    var pop = Popcorn( "#video" );

    pop.parseJSON( "data.json" );
