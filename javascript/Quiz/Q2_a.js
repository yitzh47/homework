window.app = window.app ||{};

// SL - amodule? not very descriptive. Descriptive names very important for maintainable code
// - ok I see the other is bmodule, so a and b. still why not counterA and counterB or something...
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

// SL - nice. window.app stuff a little more compicated then needed for this example...