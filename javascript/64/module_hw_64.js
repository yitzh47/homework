window.module = window.module || {};

window.module = (function(theModule) {
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
}(window.module || {}));
