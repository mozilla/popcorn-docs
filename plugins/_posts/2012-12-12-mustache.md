# Mustache #

## Purpose ##

Adds the ability to render JSON using templates via the Mustache templating library.

## Options ##

* start: the time in seconds when the mustache template should be rendered in the target div.
* end: the time in seconds when the rendered mustache template should be removed from the target div.
* target: a String -- the target div's id.
* template: the mustache template for the plugin to use when rendering.  This can be a String containing the template, or a Function that returns the template's String.
* data: the data to be rendered using the mustache template.  This can be a JSON String, a JavaScript Object literal, or a Function returning a String or Literal.
* dynamic: an optional argument indicating that the template and json data are dynamic and need to be loaded dynamically on every use.  Defaults to True.

## Example ##

    var pop = Popcorn( "#video" );

    pop.mustache({
      start: 5,  // seconds
      end:  10,  // seconds
      target: 'mustache-div',
      template: '<h1>{{header}}</h1>'                           +
        '{{#items}}'                                    +
        '  {{#first}}'                                  +
        '    <li><strong>{{name}}</strong></li>'        +
        '  {{/first}}'                                  +
        '  {{#link}}'                                   +
        '    <li><a href="{{url}}">{{name}}</a></li>'   +
        '  {{/link}}'                                   +
        '{{/items}}'                                    +
        ''                                              +
        '{{#empty}}'                                    +
        '  <p>The list is empty.</p>'                   +
        '{{/empty}}'                                    ,
      data:     '{'                                                        +
        '  "header": "Test 1", '                                   +
        '  "items": [ '                                            +
        '      {"name": "red", "first": true, "url": "#Red"}, '    +
        '      {"name": "green", "link": true, "url": "#Green"}, ' +
        '      {"name": "blue", "link": true, "url": "#Blue"} '    +
        '  ],'                                                     +
        '  "empty": false'                                         +
        '}',
      static: true /* The json is not going to change, load it early. */
    });

* [jsFiddle Example](http://jsfiddle.net/popcornjs/DmupJ/)
