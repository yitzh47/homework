const http = require('http');

http.createServer(function (req, res){

    const baseUrl = 'http://' + req.headers.host;
    const url = new URL(req.url, baseUrl);
    const queryDate = new Date(url.searchParams.get('iso'));
    
    if (url.pathname === '/api/parsetime'){
        let json = {
            hour: queryDate.getHours(),
            minute: queryDate.getMinutes(),
            second: queryDate.getSeconds(),
        }
        return res.end(JSON.stringify(json))
    }

    else if (url.pathname === '/api/unixtime') {
        let unixObj = {
            unixtime: queryDate.getTime(),
        }
        return res.end(JSON.stringify(unixObj))
    }
    

}).listen(process.argv[2])