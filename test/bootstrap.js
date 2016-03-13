var dotenv = require('dotenv')
    dotenv.load()

process.env.NODE_ENV = 'test'
// for compatibility with wercker:
process.env.AMQP_URL = process.env.AMQP_URL || process.env.RABBITMQ_PORT_5672_TCP.replace( 'tcp', 'amqp' )

var chai = require( 'chai' )
    chai.should()
