var Gpio = require('onoff').Gpio,
  led = new Gpio(17, 'out'),
  button = new Gpio(14, 'in', 'rising');

led.writeSync( 0)
button.watch( function(err, value){
console.log( 'Push')
})
