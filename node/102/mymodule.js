const fs = require('fs')
const http = require('http');
const path = require('path');

'use strict';

module.exports = (dir, ext, callback) => {

    fs.readdir(dir, (err, files) => {
        if (err) {
            return callback(err);
        }
        const filterAgain = files.filter(file => path.extname(file) === `.${ext}`);
        callback(null, filterAgain);
    })




}

