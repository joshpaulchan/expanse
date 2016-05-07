// written by: Joshua Chan, Anthony Wong (Virtualization Team)
// tested by: Joshua Chan, Anthony Wong (Virtualization Team)
// debugged by: Joshua Chan, Anthony Wong (Virtualization Team)

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
    sock.setEncoding('base64');
    var windowId = uuid.v4();
    // var frameBuf = Buffer();
    
    io.emit('windowCreate', {
        id: windowId
    });
    
    console.log("Window stream initialized.");
    sock.on('data', function(data) {
        console.log(data);
        
        // frameBuf += data;
        
        io.emit('window', {
            id: windowId,
            title: 'Google Chrome',
            // buffer: frameBuf.toString('base64')
            buffer:''
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

http.listen(CLIENT_PORT, '0.0.0.0', function () {
  console.log('Example app listening on port 3000!');
});
