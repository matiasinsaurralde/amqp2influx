var amqp = require( 'amqplib' )

var AMQP2Influx = function( processMessage, initCallback ) {

  var amqp2influx = this,
      processMessage = processMessage || amqp2influx.processMessage

  amqp.connect( process.env.AMQP_URL ).then( function( connection ) {
    if( initCallback ) {
      initCallback()
    }

    console.log('123', processMessage )

    connection.createChannel().then( function( channel ) {
      amqp2influx.channel = channel
      var queue = channel.assertQueue( process.env.AMQP_QUEUE_NAME, { durable: true } )
      queue.then( function() {
        channel.consume( process.env.AMQP_QUEUE_NAME, function(envelope) {
          console.log('123', processMessage )
          // processMessage( envelope, channel )
        }, { noAck: false } )
      })
    })
  })

}

module.exports = AMQP2Influx
