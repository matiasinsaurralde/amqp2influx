FROM mhart/alpine-node

COPY . /opt/amqp2influx

WORKDIR /opt/amqp2influx

RUN npm install

CMD [ "npm", "start" ]
