const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const io = require('socket.io');
const socketIo = io(server);

let chatters = [];

socketIo.on('connection', socket => {
  console.log('a user connected');

  // socket.emit('foo', 'Hello from server');

  let name;
  socket.on('login', (n, callback) => {
    if (chatters.find(c => c.name === n)) {
      //return console.log('duplicate name');
      return callback('user name already taken');
    }
    name = n;
    chatters.push({name, id: socket.id});


    socket.broadcast.emit('info', `${n} has joined the chat`);

    socket.on('message', msg => {
      let messageToChatter = false;

      if(msg.includes('@')){
        let message = msg.split('@');
        let messageTo = message[1].split(' ');
        messageToChatter = chatters.find(c => c.name === messageTo[0]);

        if (messageToChatter) {
          socket.to(messageToChatter.id).emit("message", { user: name, msg });
        }
        else{
          socket.emit('info', `${messageToChatter} is not online`);
        }

      }
      if (!messageToChatter){
        socketIo.emit('message', { user: name, msg });
      }
      
    });

    socket.on('disconnect', () => {
      chatters = chatters.filter(c => c !== name);
      socketIo.emit('info', `${name} has left the chat`);
    });

    let x = chatters.map(c => c.name)

    callback(x);
  });
});

app.use('/', (req, res, next) => {
  res.end('Hello world');
});

server.listen(80);

