const dgram = require('dgram');
const client = dgram.createSocket('udp4');
const UDP_PORT = 41234; // Same port as the server.

function sendLog(level, message) {
  const logMessage = `${level}: ${message}`;
  client.send(logMessage, UDP_PORT, 'localhost', (err) => {
    if (err) console.error('Failed to send log', err);
    else console.log('Log sent:', logMessage);
    client.close();
  });
}

// Send different log levels for testing.
sendLog('INFO', 'Application started');
sendLog('ERROR', 'An error occurred');
sendLog('DEBUG', 'Debugging log message');
