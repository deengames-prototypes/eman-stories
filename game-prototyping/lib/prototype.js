// http://stackoverflow.com/a/950146/210780
function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'application/javascript';
    if (url.indexOf('.json') === -1 && typeof(window.prototypePath) !== "undefined") {
        script.src = (window.prototypePath || '') + url;
    } else {
      script.src = url;
    }

    if (callback != null) {
      // Then bind the event to the callback function.
      // There are several events for cross browser compatibility.
      script.onreadystatechange = callback;
      script.onload = callback;
    }

    // Fire the loading
    head.appendChild(script);
}

// Load everything "automagically"

// Load externs. If the file is missing, use an empty hash.
externs = { };
loadScript('external.json');

loadScript('lib/helpers.js');
loadScript('lib/crafty-extensions.js');
loadScript('lib/actor.js');
loadScript('lib/configuration.js');
//loadScript('lib/console.js');
loadScript('lib/random.js');
loadScript('lib/spawner.js');
loadScript('lib/3rdparty/seedrandom.min.js');
loadScript('lib/seededRng.js');
