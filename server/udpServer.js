const dgram = require('dgram');
const Logger = require('./logger/Logger');
const { UDP_PORT } = require('./config');

const server = dgram.createSocket('udp4');
const logger = new Logger();

server.on('message', (msg, rinfo) => {
  const message = msg.toString();
  logger.log(message);
  console.log(`Received log from ${rinfo.address}:${rinfo.port}`);
});

server.on('error', (err) => {
  console.error(`Server error:\n${err.stack}`);
  server.close();
});

server.bind(UDP_PORT, () => {
  console.log(`UDP Server running on port ${UDP_PORT}`);
});
