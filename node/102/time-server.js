const net = require('net')

net.createServer((socket) => {

    const date = new Date();
    

    let year = date.getFullYear();
    let month = date.getMonth() < 10 ? `0${date.getMonth()+1}` : date.getMonth()
    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    let minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()

    let data = `${year}-${month}-${day} ${hour}:${minute}\n`
    socket.write(data)
    socket.end()
}

).listen(process.argv[2])
