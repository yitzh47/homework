window.app = window.app ||{}; 

window.app.bmodule = (function(theModule){
    'use strict';

    let countersInExistence = 0; 

    function instancesOfCounter(){
        console.log(countersInExistence);
    }
    
    theModule.makeCounter = function makeCounter(){
        countersInExistence++;
        let count = 0;
        return{
            instancesOfCounter: instancesOfCounter,
            incrementCount: function incrementCount(){
                count++;
            },
            currentCount: function currentCount(){
                console.log(count);
            }
        };
    };

    return theModule;

}(window.app.bmodule || {}));