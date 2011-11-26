# ApplyClass #

## Purpose ##

Apply css class to jquery selector. Selector is relative to plugin target's id

## Options ##

* **class** - specifies the class to apply to the plugin container, can be seperated by spaces for more then one class

## Examples ##

    var popcorn = Popcorn( "#video" );

    popcorn.footnote({
      start: 2,
      end: 6,
      text: "TOGGLING EVENTS",
      target: "footnote",
      effect: "applyclass",
      applyclass: "test1, test2"
    })
    .footnote({
      start: 20, // seconds
      end: 45, // seconds
      target: "footnotediv",
      text: "Visit webmademovies.org for more details",
      effect: "applyclass",
      applyclass: "applyoverlay: .overlay, hover: parent"
    });

    popcorn.play();

Simple applyclass effect [jsFiddle](http://jsfiddle.net/68tzd/)
