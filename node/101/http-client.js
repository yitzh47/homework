'use strict';

const http = require('http');

http.get(process.argv[2], r => {
        //r.setEncoding('utf8');
    r.on('error', err => console.error(err))
    r.on('data', (data) => console.log(data.toString()))
})
