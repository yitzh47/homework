window.app = window.app ||{}; 

window.app.amodule = (function(theModule) {
    'use strict';

    let count = 0;

    theModule.incrementCount = function incrementCount(){
        count++;
    };
    theModule.currentCount = function currentCount(){
        console.log(count);
    };

    return theModule;

}(window.app.amodule || {}));