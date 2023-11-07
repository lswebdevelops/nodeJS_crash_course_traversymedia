const EventEmitter = require('events');
const uuid = require('uuid');

// console.log(uuid.v4()); //9b0b77d7-f1a0-4aa9-bbbf-b4e150c5b0bf etc... 

class Logger extends EventEmitter {
    log(msg) {
        //call event
        this.emit('message', { id: uuid.v4(), msg});
    }
}

module.exports = Logger;

