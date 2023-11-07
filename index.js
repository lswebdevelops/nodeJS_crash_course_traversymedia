const Logger = require('./logger')

const logger = new Logger();

logger.on('message', data => console.log('Called Listener' ,data))

logger.log('hello World')
logger.log('hi!')
logger.log('hello!')