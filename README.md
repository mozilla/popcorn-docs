Popcorn.js Documentation
=====================

The [Popcorn.js](http://github.com/mozilla/popcorn-js) documentation was written using [Jekyll](https://github.com/mojombo/jekyll/wiki), [YAML Front Matter](https://github.com/mojombo/jekyll/wiki/YAML-Front-Matter) and the [liquid templating system](https://github.com/mojombo/jekyll/wiki/Template-Data).

Requirements
===========

* **Ruby** - I would recommend using [RubyGems](https://rubygems.org/)
* **Jekyll** - `sudo gem install jekyll` if you run into any issues, take a look [here](https://github.com/mojombo/jekyll/wiki/Install)
* **Pygments** - used for styled code samples, take a look at the [installation instructions](http://pygments.org/download/)

Setting Up a Local Instance
===========================

If you want to setup a local instance to test with run the following command (after installing all of the requirements listed above):

`jekyll serve --baseurl '/popcorn-docs'`

This will setup up a local copy of the documentation that can be accessed at http://localhost:4000/popcorn-docs/

Writing Documentation
=====================

All of our documentation is written in [Markdown](http://daringfireball.net/projects/markdown/syntax#p) and is organized into the following format (for the most part):

    ---
    // This is the title of the item we are documenting
    // this ends up being the id for the generated element on the page, so be sure to make it unique!
    title: Footnote
    ---

    // Title as it will appear on the page, probably the same as the above title
    # Footnote #

    // A header for the purpose
    ## Purpose ##

    // A brief explanation of what this method/function/etc is supposed to do
    Adds text to an element on the page.

    // A header for the options (if there is any)
    ## Options ##

    // If there are any options that need to be explained (function parameters, object properties, etc) do it here
    // A bulleted list describing each option
    // Be sure to specify the desired type(s) i.e Number
    * **start** \[Number\] - The time you want the footnote to appear.
    * **end** \[Number\] - The time you want the footnote to be hidden.
    * **text** \[String\] - The text you want to appear in the target.
    * **target** \[String\] - The id of the document element that the text is to be attached to. This target element must exist on the DOM

    // Provide a brief code sample and/or a jsfiddle showcasing a live example
    ## Example ##

    // Be sure to wrap any code snippets in the following line of liquid templating code
    // to make sure that we get code highlighting and line numbers
    {% highlight js linenos %}
        var p = Popcorn( "#video" ).footnote({
          start: 5,
          end: 15,
          text: 'This text will appear in "target". ',
          target: "footnotediv"
        });
    // also be sure to close it once your code snippet is done
    {% endhighlight %}

Community
==========

* [Mailing List for Users](https://groups.google.com/group/web-made-movies-working)
* [IRC Channel for Developers and Technical Users](irc://irc.mozilla.org/popcorn)
* [Twitter @popcornjs](https://twitter.com/#!/popcornjs)
* [File a Bug](https://webmademovies.lighthouseapp.com/projects/63272-popcornjs/tickets/new)

