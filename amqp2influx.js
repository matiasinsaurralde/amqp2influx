var amqp = require( 'amqplib' )

var AMQP2Influx = function() {

  var self = this
  amqp.connect( process.env.AMQP_URL ).then( function( connection ) {
    connection.createChannel().then( function( channel ) {
      var queue = channel.assertQueue( process.env.AMQP_QUEUE_NAME, { durable: true } )
      queue.then( function() {
        channel.consume( process.env.AMQP_QUEUE_NAME, self.processMessage )
      })
    })
  })
}

AMQP2Influx.prototype.processMessage = function() {
  console.log( 'process message!' )
}

module.exports = AMQP2Influx
