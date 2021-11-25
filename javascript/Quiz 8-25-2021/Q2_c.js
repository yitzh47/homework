
(function() {
    'use strict';
    
    for (let i = 0; i < 10; i++) {
        window.app.amodule.incrementCount();
    }
    
    let a = window.app.bmodule.makeCounter();
    let b = window.app.bmodule.makeCounter();

    for (let i = 0; i < 5; i++) {
        a.incrementCount();
    }

    for (let i = 0; i < 15; i++) {
        b.incrementCount();
    }
    window.app.amodule.currentCount();
    a.currentCount();
    b.currentCount();

    

}());

