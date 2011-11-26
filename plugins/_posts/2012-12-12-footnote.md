# Popcorn Footnote Plug-in #

## Purpose ##

Adds text to an element on the page.

## Options ##

* Start [Number]: The time you want the footnote to appear.
* End [Number]: The time you want the footnote to be hidden.
* Text [String]: The text you want to appear in the target.
* Target [String]: The id of the document element that the text is to be attached to. This target element must exist on the DOM

## Example ##

    var p = Popcorn( "#video" ).footnote({
      start: 5,
      end: 15,
      text: 'This text will appear in "target". ',
      target: "footnotediv"
    });
