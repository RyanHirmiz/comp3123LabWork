var events = require('events');
var eventEmitter = new events.EventEmitter();

var fn= function(){
    console.log('Call me.');
}

var fn3 = function(){
    console.log('Call 911');
}
var fn2 = function(){
    console.log('The Alarm has been triggered!');
    fn3();
}

eventEmitter
    .on('call', fn)
    .on('call2', fn2);

eventEmitter.emit('call');
eventEmitter.emit('call2');






