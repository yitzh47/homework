module.exports = (req, res, next) => {
    
    const baseUrl = 'http://' + req.headers.host;
    const url = new URL(req.url, baseUrl);
    if (url.searchParams.get('magicWord') === 'please'){
        next();
    }
    else{
        throw new Error('Magic word not found.')
    }
}