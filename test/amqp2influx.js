var amqp = require( 'amqplib' )

describe( 'AMQP2Influx object', function() {

  var AMQP2Influx, amqp2influx

  this.timeout( 15000 )

  beforeEach( function() {
    AMQP2Influx = require( '../amqp2influx' )
  })

  it( 'should be able to be required', function() {
    AMQP2Influx.should.be.a( 'function' )
  })

  it( 'should be initialized & process a message', function( done ) {

    amqp2influx = new AMQP2Influx( function( message, influx, callback ) {
      if( message.event === 'test' ) {
        done()
        callback()
      }
    })

    amqp.connect( process.env.AMQP_URL ).then( function( connection ) {
      connection.createChannel().then( function( channel ) {

        var queue = channel.assertQueue( process.env.AMQP_QUEUE_NAME, { durable: true } ),
            messageObject = { event: 'test' },
            message = JSON.stringify( messageObject )

        queue.then( function() {
          channel.sendToQueue( process.env.AMQP_QUEUE_NAME, new Buffer( message ), { deliveryMode: true } )
        })
      })
    })
  })

})
