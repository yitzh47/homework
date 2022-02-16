const fs = require('fs/promises');

'use strict';

(async () => {
    try {
        const file = await fs.readFile(process.argv[2], 'utf8');
        console.log(file.split('\n').length - 1);
    } catch (err) {
        console.error(err);
    }
})();