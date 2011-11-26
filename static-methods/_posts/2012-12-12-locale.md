# Locale #

## Purpose ##

Provide language and region locale information

When a page loads, Popcorn will initialize a table of useful language and locale related values. The table can be updated with a call to Popcorn.locale.set(), eg. Popcorn.locale.set("fr-CA");. Calls to Popcorn.locale.set(); will result in the "locale:changed" event being fired on all currently existing Popcorn instances. This allows program code, plugins and players to listen for changes in the locale and react accordingly.

## Options ##

* **Popcorn.locale.get()** - returns the current locale object
* **Popcorn.locale.set( langRegion )** - set the locale, which is a string that takes the form of "lang-region" ex: "fr-CA"
* **Event: "locale:changed"** - an event fired when the locale changes

## Examples ##

* Shows basic use of locale with console.logs [jsFiddle](http://jsfiddle.net/popcornjs/B3F4X/)
* Here is a sample Popcorn program that reacts when the user is given controls to change the locale [jsFiddle](http://jsfiddle.net/popcornjs/T89mj/1/)
