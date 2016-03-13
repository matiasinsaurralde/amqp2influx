var dotenv = require('dotenv')
    dotenv.load()

var AMQP2Influx = require( './amqp2influx' ),
    amqp2influx = new AMQP2Influx( function( envelope, callback ) {
      
    })
