window.myApp = window.myApp || {};


window.myApp.utils = (function(theModule) {
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    theModule.getDayName = function getDayName(num){
        return days[num-1];
    };
    
    theModule.getDayNumber = function getDayNumber(name){
        return days.findIndex(n => n.toUpperCase() === name.toUpperCase()) + 1;
    };

    return theModule;

}(window.myApp.utils || {}));

