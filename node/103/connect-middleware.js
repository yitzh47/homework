const connect = require('connect');
const app = connect();


app.use('/noAuthNeeded', (req, res, next) => {
    res.end("you found the noAuthNeeded page")
})

app.use(require('./authorization'))

app.use('/about', (req, res, next) =>{
    res.end("you found the about page")
})

app.use('/home', (req, res, next) => {
    res.end("you found the home page")
})

app.use('/items', (req, res, next) => {
    res.end("you found the items page")
})

app.use((error, req, res, next) => {
    res.end(error.message)
})

app.listen(80)