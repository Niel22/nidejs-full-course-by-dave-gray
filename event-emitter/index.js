const logEvent = require('./logEvent');

const eventEmitter = require('events');

class MyEmitter extends eventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('log',(msg) => logEvent(msg));

setTimeout(() => {
    myEmitter.emit('log', 'I think we have a problem here');
}, 2000);