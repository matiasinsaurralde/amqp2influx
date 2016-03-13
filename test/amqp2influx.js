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
