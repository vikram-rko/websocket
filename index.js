var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(3000, function(){
    console.log('listening for requests on port 3000');
});

// Socket setup
var io = socket(server, { cors: { origin: "*" } });

// Listen for new connection and print a message in console 
io.on('connection', (socket) => {

    console.log(`New connection ${socket.id}`);

    // Listening for chat event
    socket.on('chat', function(data){
        // console.log('chat event trigged at server');
        // console.log('need to notify all the clients about this event');
        io.sockets.emit('chat', data);
    });

    // Listening for typing event
    socket.on('dna', function(data){
        console.log(`Server received: dna`);
        // console.log(`Server received ${data} is typing`);
        // console.log('need to inform all the clients about this');
        io.sockets.emit('dna', data);
        //socket.broadcast.emit('typing', data);
    });

    socket.on('capsid', function(data){
        console.log(`Server received: capsid`);
        // console.log(`Server received ${data} is typing`);
        // console.log('need to inform all the clients about this');
        io.sockets.emit('capsid', data);
        //socket.broadcast.emit('typing', data);
    });

    socket.on('phelper', function(data){
        console.log(`Server received: phelper`);
        // console.log(`Server received ${data} is typing`);
        // console.log('need to inform all the clients about this');
        io.sockets.emit('phelper', data);
        //socket.broadcast.emit('typing', data);
    });

    socket.on('order', function(data){
        console.log(`Server received: order placed`);
        // console.log('need to inform all the clients about this');
        io.sockets.emit('order', data);
        //socket.broadcast.emit('typing', data);
    });

});
