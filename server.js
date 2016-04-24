var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('client'));

io.on('connection', function(socket) {
    console.log("A user connected");
    socket.on('disconnect', function() {
        console.log("A user disconnected");
    });
    
    var gesture = Math.random();
    io.emit('gesture', gesture);
});

http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
