var dotenv = require('dotenv')
    dotenv.load()

process.env.NODE_ENV = 'test'
// for compatibility with wercker:
process.env.AMQP_URL = process.env.AMQP_URL || process.env.RABBITMQ_PORT_5672_TCP.replace( 'tcp', 'amqp' )

var chai = require( 'chai' )
chai.should()

describe( 'AMQP2Influx object', function() {

  var AMQP2Influx

  beforeEach( function() {
    AMQP2Influx = require( '../amqp2influx' )
  })

  it( 'should be able to be required', function() {
    AMQP2Influx.should.be.a( 'function' )
  })

  it( 'should be able to be initialized', function() {
    var amqp2influx = new AMQP2Influx()
    amqp2influx.should.be.an.instanceof( AMQP2Influx )
  })

})
