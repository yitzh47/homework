window.myApp = window.myApp || {};


window.myApp = (function(theModule) {
    'use strict';


    theModule.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    
    theModule.getDayName = function getDayName(num){
        return theModule.days[num-1];
    };
    
    theModule.getDayNumber = function getDayNumber(name){
        return theModule.days.findIndex(n => n.toUpperCase() === name.toUpperCase()) + 1;
    };

    
    console.log(theModule.getDayName(1));
    console.log(theModule.getDayNumber('tuesday'));
    

    return theModule;

}(window.myApp || {}));

