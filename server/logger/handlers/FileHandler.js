const fs = require('fs');
const { LOG_FILE_PATH } = require('../../config');

class FileHandler {
  handle(logMessage) {
    const logEntry = `[${logMessage.timestamp}] ${logMessage.level}: ${logMessage.message}\n`;
    fs.appendFile(LOG_FILE_PATH, logEntry, (err) => {
      if (err) console.error('Failed to write log to file', err);
    });
  }
}

module.exports = FileHandler;
