var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var net = require('net');
var uuid = require('node-uuid');

app.use(express.static('client'));

var HOST = '127.0.0.1';
var WINDOW_PORT = 8000;
var GESTURE_PORT = 56616;
var CLIENT_PORT = 3000;

var windowServer = net.createServer();
var gestureServer = net.createServer();

windowServer.on('connection', function(sock) {
    // Set up streaming
    var windowId = uuid.v4();
    io.emit('windowCreate', {
        id: windowId
    });
    
    console.log("Window stream initialized.");
    sock.on('data', function(data) {
        console.log(data);
        
        io.emit('window', {
            id: windowId,
            title: 'Google Chrome',
            // buffer: data.toString('base64')
            buffer: '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'
        });
    });
    
    sock.on('close', function() {
        io.emit('windowDestroy', {
            id: windowId
        });
        console.log("Window stream closed.");
    });
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
