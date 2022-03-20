'use strict';

(function () {
  const socketIo = io();

  const loginForm = $('#loginForm');
  loginForm.submit(e => {
    e.preventDefault();
    socketIo.emit('login', $('#name').val(), res => {
      if (res === 'user name already taken') {
        $('#error').text(res);
      } else {
        loginForm.slideUp();
        $('#messagesContainer').slideDown();

        const messagesDiv = $('#messages');

          
        res.forEach(c => {
          messagesDiv.append(`<li>${c}</li>`);
        });

        socketIo.on('loggedIn', (chatterNames) => {
          chatterNames.forEach(c => {
            messagesDiv.append(`<li>${name}</li>`);
          });
        });


        socketIo.on('message', msg => {
          //console.log(msg);
          //messagesDiv.append(`<div>${msg}</div>`)
          messagesDiv.append(`<div>${msg.user} said: ${msg.msg}</div>`)
        });

        socketIo.on('info', msg => {
          messagesDiv.append(`<div class="error">${msg}</div>`)
        });

        const messageInput = $('#message');

        $('#messageForm').submit(e => {
          e.preventDefault();
          socketIo.emit('message', messageInput.val());
          messageInput.val('');
        });
      }
    });
  });
}());