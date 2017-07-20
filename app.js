var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var Gpio = require('onoff').Gpio,
  led = new Gpio(17, 'out'),
  button = new Gpio(14, 'in', 'rising');

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(client) {
    console.log('Client connected...');

    client.on('join', function(data) {
        console.log(data);
    });
    client.on('message', function(data) {
        console.log(data);
    });



});

button.watch( function(err, value){
io.emit('button', "Pushed real button");
console.log( 'Push')
})

server.listen(8080);
