var winston = require('winston')

describe( 'AMQP2Influx-Winston integration', function() {

  var AMQP2Influx,
      winston = require( 'winston' )

  var AmqpWinston = require( 'amqp-winston' )

  winston.loggers.add( 'worker', {
    transports: [
      new AmqpWinston({
        name: 'worker', level: 'silly', host: process.env.AMQP_URL, exchange: 'logs', exchangeOptions: { type: 'fanout', durable: false }, routingKey: 'logRoutingKey'
      })
    ]
  })

  var logger =  winston.loggers.get( 'worker' )
  logger.silly( 'test' )

  beforeEach( function() {
    AMQP2Influx = new require( '../amqp2influx' )()
  })

})
