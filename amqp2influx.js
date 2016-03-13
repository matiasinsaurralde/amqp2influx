var amqp = require( 'amqplib' )

var AMQP2Influx = function( processMessage ) {

  var amqp2influx = this

  this.amqp = amqp.connect( process.env.AMQP_URL ).then( function( connection ) {
    connection.createChannel().then( function( channel ) {
      amqp2influx.channel = channel
      var queue = channel.assertQueue( process.env.AMQP_QUEUE_NAME, { durable: true } )
      queue.then( function() {
        channel.consume( process.env.AMQP_QUEUE_NAME, function(envelope) {
          var message = JSON.parse(envelope.content)
          processMessage( message, null, function() {
            channel.ack( envelope )
          })
        }, { noAck: false } )
      })
    })
  })

}

module.exports = AMQP2Influx
