var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var net = require('net');

app.use(express.static('client'));

var HOST = '127.0.0.1';
var WINDOW_PORT = 56615;
var GESTURE_PORT = 56616;
var CLIENT_PORT = 3000;

var windowServer = net.createServer();
var gestureServer = net.createServer();

windowServer.on('connection', function(sock) {
    // Set up streaming
    sock.on('data', function(data) {
        console.log(data);
    });
    sock.write('hello\r\n');
});

gestureServer.on('connection', function(sock) {
    // Verify integrity
    // Set up streaming
    sock.on('data', function(data) {
        console.log(data);
        io.emit('gesture', data);
    });
});

io.on('connection', function(socket) {
    console.log("A user connected");
    socket.on('disconnect', function() {
        console.log("A user disconnected");
    });
    
    var gesture = Math.random();
    
});

windowServer.listen(WINDOW_PORT);
gestureServer.listen(GESTURE_PORT);

http.listen(CLIENT_PORT, function () {
  console.log('Example app listening on port 3000!');
});
