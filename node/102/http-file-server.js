const http = require('http');
const fs = require('fs')

http.createServer((req, res) => {

    const readStream = fs.createReadStream(process.argv[3], 'utf8');

    readStream.on('data', (chunk) => {
        res.write(`${chunk}`)
    })
    readStream.on('end', () => res.end())

}).listen(process.argv[2])