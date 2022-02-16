const fs = require('fs')

'use strict';

console.log(fs.readFileSync(process.argv[2], 'utf8')).toString().split('\n').length - 1);