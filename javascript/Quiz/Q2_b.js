window.app = window.app ||{};

//
window.app.bmodule = (function(theModule){
    'use strict';

    let countersInExistence = 0;

    // SL - just btw - no reason this func needs to be written here vs other below. Both styles are virtually identical..
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

// SL - nice
// SL - grade - 100