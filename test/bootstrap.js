var dotenv = require('dotenv'),
    chai = require( 'chai' )

dotenv.load()
chai.should()

process.env.NODE_ENV = 'test'
// for compatibility with wercker:
process.env.AMQP_URL = process.env.AMQP_URL || process.env.RABBITMQ_PORT_5672_TCP.replace( 'tcp://', 'amqp://guest:guest@' )
process.env.AMQP_QUEUE_NAME = process.env.AMQP_QUEUE_NAME || 'testQueue'

