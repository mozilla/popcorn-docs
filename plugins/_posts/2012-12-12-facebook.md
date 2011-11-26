# Facebook #

## Purpose ##

The facebook plugin allows the user to bring popular aspects from facebook and display it to the user between a gien start and end time.  Features a like box, a stream of a users friends, comments on a specific post, and many more.

## Options ##

* Sets options according to user input or default values
* Type [String]:  is the name of the plugin in fbxml format. Options: LIKE (default), LIKE-BOX, ACTIVITY, FACEPILE
* Target [String]: is the id of the document element that the text needs to be attached to. This target element must exist on the DOM
* Start [Number]: is the time that you want this plug-in to execute
* End [Number]: is the time that you want this plug-in to stop executing
*
* Other than the mandatory four parameters, there are several optional parameters (Some options are only applicable to certain plugins)
*
* Action [String]: like button will either "Like" or "Recommend". Options: recommend / like(default)
* Always_post_to_friends [Boolean]: live-stream posts will be always be posted on your facebook wall if true. Options: true / false(default)
* Border_color [String]: border color of the activity feed. Names (i.e: "white") and html color codes are valid
* Colorscheme [String]: changes the color of almost all plugins. Options: light(default) / dark
* Event_app_id [String]: an app_id is required for the live-stream plugin
* Font [String]: the font of the text contained in the plugin. Options: arial / segoe ui / tahoma / trebuchet ms / verdana / lucida grande
* Header [Boolean]: displays the title of like-box or activity feed. Options: true / false(default)
* Href [String]: url to apply to the plugin. Default is current page
* Layout [String]: changes the format of the 'like' count (written in english or a number in a callout). Options: box_count / button_count / standard(default)
* Max_rows [Number]: number of rows to disperse pictures in facepile. Default is 1
* Recommendations [Boolean]: shows recommendations, if any, in the bottom half of activity feed. Options: true / false(default)
* Show_faces [Boolean]: show pictures beside like button and like-box. Options: true / false(default)
* Site [String]: href for activity feed. No idea why it must be "site". Default is current page
* Stream [Boolean]: displays a the latest posts from the specified page's wall. Options: true / false(default)
* Type [String]: determines which plugin to create. Case insensitive
* Xid [String]: unique identifier if more than one live-streams are on one page

## Example ##

    var pop = Popcorn( "#video" );

    pop.facebook({
      type: "live-stream",
      target: "activitydiv",
      start: 1,
      end: 10,
      // id is from example http://developers.facebook.com/docs/reference/plugins/live-stream/
      event_app_id: 174243249296725
    });

* [jsFiddle Example](http://jsfiddle.net/popcornjs/UC6Px/);
