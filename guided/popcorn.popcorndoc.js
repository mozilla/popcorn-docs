// PLUGIN: popcorndoc

(function (Popcorn) {

  /**
   * Github Gist popcorn plug-in
   * Loads and allows lines of code in a gist to be highlighted, and examples run.
   *
   * @param {Object} options
   *
   * Example:
   *  var p = Popcorn('#video')
   *     .popcorndoc({
   *       start: 5, // seconds
   *       end: 15, // seconds
   *       lines: '25', // line(s) to highlight and show
   *       target: 'gist-container', // DIV in which to load gist
   *       gistUrl: 'https://gist.github.com/289467' // URL of gist
   *     })
   *     // The specified "line" can also be a list
   *     .popcorndoc({
   *       start: 20, // seconds
   *       end: 25, // seconds
   *       lines: '26,29-32', // line(s) to highlight and show
   *       target: 'gist-container', // DIV in which to load gist
   *       gistUrl: 'https://gist.github.com/289467' // URL of gist
   *     })
   *     // Highlighting can be removed
   *     .popcorndoc({
   *       start: 20, // seconds
   *       end: 25, // seconds
   *       lines: null // line(s) to highlight and show
   *       target: 'gist-container', // DIV in which to load gist
   *       gistUrl: 'https://gist.github.com/289467' // URL of gist
   *     });
   *     // Run the example.  NOTE: should be last gist track.
   *     .popcorndoc({
   *       start: 29, // seconds
   *       target: 'gist-container', // DIV in which to load gist
   *       gistUrl: 'https://gist.github.com/289467', // URL of gist
   *       runIn: 'iframe-container-div' // DIV in which to load the example in an iframe
   *     });
   */

   /**
    * script.js - https://github.com/kares/script.js
    *
    * http://www.apache.org/licenses/LICENSE-2.0.html
    * @version 0.7-SNAPSHOT
    */
var script=function(){function n(e,b){var d=e.loaded,a=e.complete;if(e.defer){var c=document.createElement("script");c.src=e.src;if(e.type)c.type=e.type;e.charset&&c.setAttribute("charset",e.charset);var g=function(){if(!(d&&d.call(c,e.writes?h||void 0:void 0)===!1)){var b=document.getElementById(e.id);if(e.writes&&h){var g=function(a){c.nextSibling?c.parentNode.insertBefore(a,c.nextSibling):c.parentNode.appendChild(a)};b||(b=document.createElement("div"),g(b));b.style.display="none";b.innerHTML=
"<br/>"+h.join("");b.removeChild(b.childNodes[0]);for(var f=b.childNodes[0];f;)b.removeChild(f),g(f),f=b.childNodes[0]}b&&b.parentNode.removeChild(b);a&&a.call(c)}},f=!1;c.onload=c.onreadystatechange=function(){if(!f&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){f=!0;c.onload=c.onreadystatechange=null;try{g()}finally{b&&b()}}};e.append(c)}else{c=document.getElementById(e.id);try{var i;d&&(i=d.call(c));i!==!1&&a&&a.call(c)}finally{if(e.idGenerated)c.id=null;b&&b()}}}
function i(){if(f&&!f.loading)f.loading=!0,function b(){if(f.length){var d=f.shift();if(d)if(d.writes){if(!j)j=document.write;if(!k)k=document.writeln;document.write=o;document.writeln=p;h=null;n(d,function(){if(j)document.write=j;if(k)document.writeln=k;h=k=j=null;b()})}else n(d),b();else b()}else delete f.loading}()}var h=null,o=function(){var e=arguments;e&&e[0]&&(h||(h=[]),h.push(e[0]))},p=function(e){o(e+"\n")},j,k,f=[],g,l=function(){g&&(g=null,i())};if(document.addEventListener)g=function(){document.removeEventListener("DOMContentLoaded",
g,!1);g=null;i()},document.addEventListener("DOMContentLoaded",g,!1),window.addEventListener("load",l,!1);else if(document.attachEvent){g=function(){document.readyState==="complete"&&(document.detachEvent("onreadystatechange",g),g=null,i())};document.attachEvent("onreadystatechange",g);window.attachEvent("onload",l);l=!1;try{l=window.frameElement==null}catch(r){}document.documentElement.doScroll&&l&&function b(){if(g){try{document.documentElement.doScroll("left")}catch(d){setTimeout(b,1);return}i()}}()}var m=
function(b){if(!b)throw"script : no arguments given";if(typeof b==="string")b={src:b};else if(!b.src)throw"script : 'src' is required";var d,a={},c=m.defaults;if(c)for(d in c)a[d]=c[d];for(d in b)a[d]=b[d];if(a.base&&a.src.substring(0,4)!=="http")d=a.base,c=a.base.length-1,d=d[c]=="/"?d.substring(0,c):d,a.src=d+"/"+a.src;if(a.onload!=null)a.onLoad=a.onLoad!=null?b.onload!=null?b.onload:b.onLoad!=null?b.onLoad:a.onload:a.onload,delete a.onload;if(typeof a.defer==="undefined")a.defer=a.onLoad;if(!a.id)a.id=
m._generateId(),a.idGenerated=!0;var h=a.append;if(typeof h==="string")a.append=function(a){document.getElementById(h).appendChild(a)};else if(h&&h.appendChild)a.append=function(a){h.appendChild(a)};if(a.writes==null)a.writes=!0;if(g){if(a.defer){if(b='<div id="'+a.id+'"',b+=a.loadingHTML?">"+a.loadingHTML:' style="diplay: none;">',b+="</div>",!a.append)a.append=function(b){var c=document.getElementById(a.id);c.parentNode.insertBefore(b,c)}}else b='<script id="'+a.id+'" src="'+a.src+'"><\/script>';
document.write(b);a.order==null?f.push(a):f.splice(a.order,0,a)}else{a.defer=!0;if(!a.append)a.append=function(a){document.getElementsByTagName("body")[0].appendChild(a)};a.order==null?f.push(a):f.splice(a.order,0,a);i()}},q=0;m._generateId=function(){return"_script-"+q++};m.defaults={type:"text/javascript"};return m}();

  /**
   * Inject CSS class into DOM, from http://paulirish.com/2008/bookmarklet-inject-new-css-rules/
   */
  var gistCssClassName;
  function setupCss(className) {
    if (className) {
      gistCssClassName = className;
      return;
    }

    gistCssClassName = "popcorn-gist-highlighted";
    var defaultHighlightedCSS = ".popcorn-gist-highlighted { background-color: #fffccf; }";

    if ("\v" == "v") {
      document.createStyleSheet().cssText = defaultHighlightedCSS;
    } else {
      var tag = document.createElement("style");
      tag.type = "text/css";
      document.getElementsByTagName("head")[0].appendChild(tag);
      tag[(typeof document.body.style.WebkitAppearance == "string") ? "innerText" : "innerHTML"] = defaultHighlightedCSS;
    }
  }

  function applyStyle(linesString, func) {
    var lines = [];
    Popcorn.forEach( linesString.split(','), function ( item, i ) {
      var range = item.split('-');
      if (range.length === 1) {
        lines.push(parseInt(range[0], 10));
      } else {
        for (var j = parseInt(range[0],10); i < parseInt(range[1],10)+1; j++) {
          lines.push(j);
        }
      }
    } );

    var i = lines.length;
    while (i--) {
      func(lines[i]);
    }
  }

  var highlighted = {};

  function getLine(num) {
    return document.getElementById('LC' + num);
  }

  function unhighlight(line) {
    line = getLine(line);
    if (!line) {
      return;
    }

    line.classList.remove('popcorn-gist-highlighted');
  }

  function highlight(line) {
    line = getLine(line);
    if (!line) {
      return;
    }

    line.classList.add('popcorn-gist-highlighted');
  }

  function scrollTo(line) {
    // todo...
  }

  var gists = {};

  function loadGist(url, target) {
    var gistId = url.match(/gist\.github\.com\/(\d+)/)[1];
    script({
      src: 'https://gist.github.com/' + gistId + '.js',
      append: target
    });
    gists[url] = true;
  }

  var iframe;
  function cleanUp(elem) {
    var container = elem.parentNode;
    if (!container) {
      throw new Error(ERR_MSG);
    }
    container.removeChild(iframe);
    iframe = null;
    console.log('cleanup');
  }

  var ERR_MSG = "popcorndoc: runIn property must be a vaild ID of a DIV in the document.";

  Popcorn.plugin( "popcorndoc" , {

    manifest: {
      about:{
        name: "Popcorn Documentation Gist Plugin",
        version: "0.1",
        author: "@humphd, @rwaldron, @remixmanifesto",
        website: "http://popcornjs.org"
      },
      options:{
        start    : {elem:'input', type:'text', label:'In'},
        end      : {elem:'input', type:'text', label:'Out'},
        target   : 'gist-container',
        lines    : {elem:'input', type:'text', label:'Line'},
        gistUrl  : {elem:'input', type:'text', label:'Gist URL'},
        runIn    : {elem:'input', type:'text', label:'Div to Run Example in'}
      }
    },
    _setup: function(options) {
      if (!gistCssClassName) {
        setupCss(options.className);
      }

      if (!gists[options.gistUrl]) {
        loadGist(options.gistUrl, options.target);
      }
    },
    start: function(event, options) {
      if (!options.lines) {
        unhighlight();

        if (options.runIn) {

          if (iframe) {
            cleanUp(iframe);
          }

          iframe = document.createElement( "iframe" );

          var contents = document.querySelectorAll( "div.line" ),
            iframeDoc,
            container = document.getElementById(options.runIn);

          if (!container) {
            throw new Error(ERR_MSG);
          }

          container.style.display = 'block';

          iframe.setAttribute( 'width', '100%' );
          iframe.setAttribute( 'height', '100%' );

          container.appendChild( iframe );
          iframeDoc = ( iframe.contentWindow || iframe.contentDocument ).document;
          iframeDoc.open();

          Popcorn.forEach( contents, function( div ) {
            var text = div.textContent;
            if ( text ) {
              // Remove single-line comments, being careful not to ditch URLs (http://....)
              text = text.replace( /[^:]\/\/.+$/, '' );
              iframeDoc.write( text + '\n' );
            }
          } );

          iframeDoc.close();
        }
      } else {
        applyStyle( options.lines, highlight );
      }
    },
    end: function( event, options ){
      if (options.lines) {
        applyStyle( options.lines, unhighlight );
      }
    }
  });

})( Popcorn );
