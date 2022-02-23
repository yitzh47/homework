const http = require('http');
const fs = require('fs');
const path = require('path');



http.createServer(async (req, res) => {

    const readStream = fs.createReadStream(process.argv[2], 'utf8')
    
    res.setHeader('Content-Type', 'text/html');

    readStream.on('data', (chunk) => {
        res.write(`<div>${chunk}</div>`)
    })



     
}).listen(80)