package quasar.web;

import openfl.net.URLRequest;
import openfl.Lib;

// TODO: replace with FlxG.openURL
class Browser
{
    /**
    Opens a URL in a new browser window. Works on JS and Android.
    Assumes no query parameters (for now).
    Not sure about other platforms at the moment.
    */
    public static function openUrl(url:String):Void
    {
        #if js
        js.Browser.window.open(url, "_blank");
        #else
        Lib.getURL(new URLRequest(url));
        #end
    }
}