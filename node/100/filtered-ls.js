'use strict';

const fs = require('fs');

(async () => {
    fs.readdir(process.argv[2], (err, list) => { 
        if(err){
            return console.error(err);     
        }
        list.filter(file => file.endsWith('.' + process.argv[3]))
            .forEach(i => console.log(i));
    });

})();