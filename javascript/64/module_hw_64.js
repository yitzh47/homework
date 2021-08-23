window.myApp = window.myApp || {};

window.myApp.utils = (function(theModule) {
    'use strict';

    theModule.stringCaseInsensitiveEquals = function(str, str2){

        if (str.toUpperCase() === str2.toUpperCase()) {
            return true;
        }
        else {
            return false;
        }
        
    };

    return theModule;
}(window.myApp.utils || {}));
