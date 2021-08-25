window.myApp = window.myApp || {};

window.myApp.utils = (function(theModule) {
    'use strict';

    theModule.stringCaseInsensitiveEquals = function(str, str2){
        return str.toUpperCase() === str2.toUpperCase();
    };

    return theModule;
}(window.myApp.utils || {}));