'use strict';

const http = require('http');

let str = '';

http.get(process.argv[2], (r)=>{
    r.on('error',(err) => console.log(err))
    r.on('data', (data) => {
        str = str + data.toString();
    });

    r.on('end', () => {
        console.log(str.length);
        console.log(str);
    })
})