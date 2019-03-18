var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

    socket.on('msg', (data) => {
       socket.broadcast.emit("msg", data);
    });

    socket.on('user_join', (data) => {
        socket.broadcast.emit("msg", data+" has joined the room")
    });
});
